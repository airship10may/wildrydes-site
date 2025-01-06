document.getElementById('submitBtn').addEventListener('click', function() {
    const inputField = document.getElementById('inputField');
    const usernameField = document.getElementById('username');
    const memoField = document.getElementById('memo');

    const input = escapeHtml(inputField.value);
    const username = escapeHtml(usernameField.value.trim());
    const timestamp = new Date().toLocaleString();

    if (input === '' || username === '') {
        alert('メモとユーザ名を入力してください');
        return;
    }

    // メモをメモ欄に追加
    memoField.textContent += `【${timestamp}】\nユーザ名: ${username}\nメモ: ${input}\n\n`;

    // 入力フィールドをクリア
    inputField.value = '';
    usernameField.value = '';

    // データをPOST形式で送信（サンプルURLに送信）
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ memo: input, username: username, timestamp: timestamp })
    })
    .then(response => response.json())
    .then(data => {
        console.log('成功:', data);
    })
    .catch((error) => {
        console.error('エラー:', error);
    });
});

// エスケープ処理関数
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '`': '&#96;'
    };
    return text.replace(/[&<>"'`]/g, function(m) { return map[m]; });
}
