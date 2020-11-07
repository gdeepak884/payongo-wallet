<?php 
session_start();
if(empty($_SESSION['username'] && $_SESSION['password']))
{
          header("Location: ../my");
          exit;
}
if(empty($_SESSION['accountno'] && $_SESSION['amount']))
{
          header("Location: index.php");
          exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>PayOnGo · Most Advanced Digital Wallet</title></title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="static/app.css">
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
  <script src="static/main.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
</head>
   <body>
<?php
$errors = [];
include("includes/config.php");
if(isset($_POST['transfer'])){
$uname= $_SESSION['uname'];
$ifsc= $_SESSION['ifsc'];
$totalamount = $_SESSION['amount'];
$accountno= $_SESSION['accountno'];
$rid = bin2hex(random_bytes(15));
$sid=$_SESSION['username'];
$percentage = 5;
$charges = ($percentage / 100) * $totalamount;
$amount= $totalamount+$charges;
$tamount=$amount-$charges;
$widhrawbalance = "INSERT into Transfertobank values('$rid','$sid','$accountno','$ifsc','$uname','$tamount',now())";
$userbalance = "UPDATE Users SET Balance=Balance-$amount WHERE Username='$sid'";
$transaction ="Insert into Transactions values(NULL,'$rid','$sid','$uname','Transfer to bank','$amount',now())";
if (($conn->query($widhrawbalance) === TRUE) && ($conn->query($userbalance) === TRUE) && ($conn->query($transaction) === TRUE)){
    array_push($errors, "Success");
    header('refresh:2;url=transfer_request.php?requested');
} 
else { 
      array_push($errors, "Try after some time");
}
}

?> 
     <div class="container py-5">
      <p style="text-align: right;" class="message">Hey, <a href="profile.php"><?=$_SESSION['username'];?></a><br/>
       <a href="../my/logout.php">Logout</a>
       <div class="row py-4">
       <a href=transfer_request.php><i class="fa fa-chevron-circle-left" style="font-size:36px"></i></a><br/><br/>
        <div class="col-lg-6 mx-auto">  
                <h2>Sending money from Wallet to</h2><br/><br/>
                <form action="transfer.php" method="POST">  
                 <?php include('alert.php'); ?>
                     <div>
                      <b> <?php echo $_SESSION['uname']."<br/>";?> </b>   
                       <?php echo "A/c No.".$_SESSION['accountno']."<br/>";?>                      
                      </div><br/>
                     <p style="text-align:center;">Amount to be sent&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?="₹".$_SESSION['amount'];?></p>
                     <p style="text-align:center;">Charges(5%)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php $percentage = 5;
$totalamount = $_SESSION['amount'];
$charges = ($percentage / 100) * $totalamount;
echo "₹".$charges;?></p>
<p style="text-align:center;"><b>Total Payable</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?$percentage = 5;
$totalamount = $_SESSION['amount'];
$charges = ($percentage / 100) * $totalamount;
$total= $totalamount+$charges;
echo "₹".$total;?></p>
                   <input type="submit" name="transfer" value="Proceed to pay" tabindex="3" class="btn btn-dark btn-block">
                </form>
</div>
</div> 
</body>
</html>
