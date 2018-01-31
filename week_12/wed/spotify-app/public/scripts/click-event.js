$(function() {
    $('body').on('click', '.track-name', function() {
        const _this = $(this);
        const id = _this.data('id');

        const result = $.ajax({
            url: `/track/url${id}`
        });
    })

    $('body').on('click', '.play-button', function() {
        const _this = $(this);
        const
    })
});