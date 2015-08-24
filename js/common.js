$(function () {
    // JavaScript で表示
//    $('#MyModal').on('click', function () {
//        $('#remoteModal').removeData('bs.modal'); //< 毎回新規に読み込み
//        $('#remoteModal').modal({ 'remote': 'dialog.html' });
//    });
    
    // 開発実績ページ向け
//    $('#MyModal').on('click', function () {
//        $('#remoteModal').removeData('bs.modal'); //< 毎回新規に読み込み
//        $('#remoteModal').modal({ 'remote': 'dialog.html' });
//    });
    
    $('#reverseButton').click(function() {
        
        var status = $(this).attr('data-status');
        
        if (status == 1) {
            // オモテ→ウラ
            $(this).text("オモテ");
            $(this).attr("data-status", 2);
            $('#frontPage').hide();
            $('#backPage').show();
            
            $('.row-wrapper').transition({
                perspective: '100px',
                rotateY: '360deg'
            }, 500, 'ease');
        }
        else {
            // ウラ→オモテ
            $(this).text("ウラ");
            $(this).attr("data-status", 1);
            $('#frontPage').show();
            $('#backPage').hide();

            $('.row-wrapper').transition({
                perspective: '100px',
                rotateY: '0deg'
            }, 500, 'ease');
        }
        
    });
});
