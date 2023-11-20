const API_KEY = 'AIzaSyDYACGLEndXp73_VD1gkRAoAuCE-6r8jeA';

function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getVideoViews() {
    const viewCountSpan = document.getElementById('viewCount');
    const videoId = '8KTFf2X-ago';

    const requestUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=statistics`;

    fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
            if (data.items && data.items.length > 0) {
                const viewCount = data.items[0].statistics.viewCount;
                const formattedViewCount = numberWithCommas(viewCount);
                viewCountSpan.textContent = `조회수-${formattedViewCount}`;
            } else {
                viewCountSpan.textContent = '영상을 찾을 수 없음';
            }
        })
        .catch(error => {
            console.error('API 호출 오류:', error);
        });
}

window.onload = getVideoViews;