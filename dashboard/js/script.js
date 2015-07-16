'use strict';

var lineChartData = {
    labels : ["1","2","3","4","5","6","7","8"],
    datasets : [
        {
            label: "My First dataset",
            fillColor : "rgba(139,196,234,0.0)",
            strokeColor : "rgba(139,196,234,1)",
            pointColor : "rgba(110,181,229,1)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgba(220,220,220,1)",
            data : [150, 110, 170, 140, 200, 230, 250, 259]
        },
        {
            label: "My Second dataset",
            fillColor : "rgba(151,187,205,0.0)",
            strokeColor : "rgba(248,107,79,1)",
            pointColor : "rgba(248,107,79,1)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgba(151,187,205,1)",
            data : [20,50,68,120,230,255,270,283]
        }
    ]

};

var data = [
    {
        value: 200,
        color:"#5FAEE3",
        highlight: "#5FAEE3",
        label: "Storage use"
    },
    {
        value: 150,
        color: "rgb(238,238,238)",
        highlight: "rgb(238,238,238)",
        label: "Free space"
    }
];

function createGraphics() {

    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true
    });

    var ctx2 = document.getElementById("canvas2").getContext("2d");
    window.myDoughnutChart = new Chart(ctx2).Doughnut(data, {
        animation: true,
        animationSteps: 60,
        animationEasing: "easeOutQuart",
        // Boolean - If we should show the scale at all
        showScale: true,
        // Boolean - If we want to override with a hard coded scale
        scaleOverride: false,

        responsive: true

    });
}

function menuClickHandler() {

    $('.menu__item').click(function () {

        $(".submenu")
            .css('display', 'none');

        $(this)
            .find('.submenu')
            .toggle('.display_active');

        $(".menu__item")
            .removeClass('menu__item_active');

        $(this)
            .addClass('menu__item_active');

        $('.menu__item > .circle')
            .removeClass('circle_active');

        $(this)
            .find('.circle')
            .addClass('circle_active');
    });

}

function checkboxHandler() {

    var allInputs = $('input:checkbox');

    allInputs.each(function () {
        var self = $(this);

        if(self.is(':checked')) {
            self.css('background-image', 'url("./img/todo-a.png")');
            self.find(' + label > .todo-img')
                .css('background-image', 'url("./img/todo-a.png")');
        }
    });


    allInputs.click(function () {

        var i,
            self = $(this);

        if(!self.is(':checked'))
        {
            self.prop('checked', false);
            self.find(' + label > .todo-img')
                .css('background-image', 'url("./img/todo-na.png")');
        }
        else if (self.is(':checked')) {
            self.prop('checked', true);
            self.find(' + label > .todo-img')
                .css('background-image', 'url("./img/todo-a.png")');
        }

    });
}

function hamburgerClickHandler() {
    var menu = $('.hamburger'),
        counter = 0;

    menu.click(function () {

        if($(document).width() >= 1500) return;

        counter++;

        if(counter % 2 == 1) {
            $('.left-side')
                .css('display', 'none')
                .css('width', '0%');
            $('.right-side').css('width', '100%')
        }
        else {
            $('.left-side')
                .css('float', 'left')
                .css('width', '23.3333333%')
                .css('display', 'block');
            $('.right-side')
                .css('width', '76.6666667%')
        }

    });

    //menu.trigger('click');
}

window.onload = function () {

    hamburgerClickHandler();
    createGraphics();
    menuClickHandler();
    checkboxHandler();

};