
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script>
    $(document).ready(function () {
        // Initialize the slideshow
        var images = $('.slideshow img');
        var currentIndex = 0;

        function showImage(index) {
            images.hide();
            images.eq(index).show();
        }

        // Show the first image initially
        showImage(currentIndex);

        // Function to advance to the next image
        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        // Set interval for the slideshow (e.g., 3000 milliseconds or 3 seconds)
        setInterval(nextImage, 3000);
    });
</script>
