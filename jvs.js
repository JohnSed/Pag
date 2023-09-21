<script>
function pausarVideo() {
    var video = document.getElementById('videoPlayer');
    video.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
}
</script>