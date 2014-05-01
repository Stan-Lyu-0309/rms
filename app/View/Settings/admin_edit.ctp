<?php
/**
 * Admin Settings Edit View
 *
 * The settings edit page allows an admin to edit site settings.
 *
 * @author		Russell Toris - rctoris@wpi.edu
 * @copyright	2014 Worcester Polytechnic Institute
 * @link		https://github.com/WPI-RAIL/rms
 * @since		RMS v 2.0.0
 * @version		2.0.0
 * @package		app.View.Settings
 */
?>

<header class="special container">
	<span class="icon fa-edit"></span>
	<h2>Edit Site Settings</h2>
</header>

<section class="wrapper style4 container">
	<div class="content">
		<section>
			<?php
			echo $this->Form->create('Setting');
			echo $this->Form->input('id', array('type' => 'hidden'));
			echo $this->Form->input('title');
			echo $this->Form->input('copyright');
			echo $this->Form->input('analytics', array('label' => 'Google Analytics ID (optional)'));
			echo $this->Form->end(array('label' => 'Save', 'class' => 'button special'));
			?>
		</section>
	</div>
</section>
