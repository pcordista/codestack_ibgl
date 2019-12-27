<?php
$file = basename($_SERVER['PHP_SELF']); // your file name 
$last_modified_time = filemtime($file);
$etag = md5_file($file);

header("Last-Modified: " . gmdate("D, d M Y H:i:s", $last_modified_time) . " GMT");
header("Etag: $etag");
?>

<?php include 'header.php'; ?>

<?php include 'components/content-top-header.php'; ?>

<?php include 'menu.php'; ?>

<?php include 'components/content-banner.php'; ?>

<?php include 'components/content-courses.php'; ?>

<?php include 'components/content-notices.php'; ?>

<?php include 'components/content-programas.php'; ?>

<?php include 'components/content-testemonials.php'; ?>







<?php include 'footer.php'; ?>
<?php include 'assets/js/JS_includes.php'; ?>
<script src="assets/devlop/live.js"></script>
<script>
heightHomeFix()
</script>
</body>

</html>