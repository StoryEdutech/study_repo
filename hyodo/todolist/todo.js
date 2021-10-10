// 初期表示処理
$(function(){
    // 初期表示で警告表示領域を非表示にする
    clearDivAlert();

});

// 追加ボタンを押した時の処理
$("#btnAdd").on("click", function(){
    clearDivAlert();

    // 入力チェック
    if($('#inputTask').val().trim().length == 0){
        $('#divAlert').css('display', 'block');
        $('#inputAlert').text('タスク内容を入力してください');
        return;
    };

    if($('#inputLimit').val().trim().length == 0){
        $('#divAlert').css('display', 'block');
        $('#inputAlert').text('期限を入力してください');
        return;
    };

    // タスクと期限テキストの値を、表に追加する
    $('#todoList').append(
        '<tr><td><button type="button" class="btn btn-outline-danger btn-sm mx-0 btnDel" id="btnDel">完了</button></td>'
        + '<td>' + $('#inputTask').val() + '</td>'
        + '<td>' + $('#inputLimit').val() + '</td></tr>');

    // タスクと期限テキストをブランクにする
    $('#inputTask').val('');
    $('#inputLimit').val('');

});

// tableが動的な要素のため静的な親要素を入れている
$(document).on("click", ".btnDel", function () {
    $(this).closest("tr").remove();
    clearDivAlert();
});

// 警告部の初期化
function clearDivAlert(){
    $('#divAlert').css('display', 'none');
    $('#inputAlert').text('');
}
