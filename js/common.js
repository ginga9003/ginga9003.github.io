$(function () {
    // JavaScript で表示
    $('#MyModal').on('click', function () {
        $('#remoteModal').removeData('bs.modal'); //< 毎回新規に読み込み
        $('#remoteModal').modal({ 'remote': 'dialog.html' });
    });
    //// ダイアログ表示前にJavaScriptで操作する
    //$('#remoteModal').on('loaded.bs.modal', function (e) {
    //    $('#remoteModal .modal-body').append('<a class="btn btn-info" href="#addjs">JavaScript で追加したボタン</a>');
    //});
    //$('#remoteModal').on('click', '.modal-footer .btn-primary', function () {
    //    $('#remoteModal').modal('hide');
    //    alert('変更を保存をクリックしました。');
    //});
    //$('#remoteModal').on('click', 'a[href="#addjs"]', function () {
    //    alert('JavaScript で追加したボタンをクリックしました。');
    //    $('#remoteModal').modal('hide');
    //});
});
