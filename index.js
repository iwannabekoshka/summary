$(document).ready(function() {
    $(".skill-progress-bar").each((index, skillBar) => {
        const barWidth = $(skillBar).attr("data-progress") + '%';
        $(skillBar).width(barWidth);
    });
});