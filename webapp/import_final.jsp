<!DOCTYPE html>
<html lang="en">
<head>
  <title>Admin Home</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="assets/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.datatables.net/1.10.16/css/dataTables.bootstrap.min.css">
  <script src="assets/js/jquery.min.js"></script>
  <script src="assets/js/bootstrap.min.js"></script>
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
  <script src="https://cdn.datatables.net/1.10.16/js/dataTables.bootstrap.min.js"></script>
  <script src="assets/js/jquery-2.1.4.min.js"></script>
    <script src="assets/js/import_final.js"></script>

  <script>
    $(document).ready(function() {
    $('#example').DataTable();
  });
        $(document).ready(function() {
    $('#filterlogs').DataTable();
  });
        $(document).ready(function() {
    $('#masterlist').DataTable();
  });
  </script>
</head>
<body>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="index.jsp">DMS Admin</a>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <li class="dropdown">
    <a class="dropdown-toggle" data-toggle="dropdown" href="#">My Account
        <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="profile.jsp">Profile</a></li>
        </ul>
      </li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Logout</a></li>
      </ul>
  </div>
  </nav>

<div class="container">
  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#home">Home</a></li>
    <li><a data-toggle="tab" href="#menu1">Filter Logs</a></li>
    <li><a data-toggle="tab" href="#menu2">Master List</a></li>
    <li><a data-toggle="tab" href="#menu3">Import</a></li>
  </ul>

 <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
      <h3>HOME</h3><hr/>
      <table id="example" class="table table-striped table-bordered" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>User-ID</th>
                <th>User Name</th>
                <th>Device-ID</th>
                <th>Time</th>
                <th>Status</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>User-ID</th>
                <th>User Name</th>
                <th>Device-ID</th>
                <th>Time</th>
                <th>Status</th>
            </tr>
        </tfoot>
        <tbody>
            <tr>
                <td>User-123</td>
                <td>Tiger Nixon</td>
                <td>d-61</td>
                <td>12:45:60</td>
                <td>New</td>
            </tr>
            <tr>
                <td>User-123</td>
                <td>Yagnesh</td>
                <td>d-65</td>
                <td>12:45:60</td>
                <td>New</td>
            </tr>
          </tbody>
        </table>
    </div>
    <div id="menu1" class="tab-pane fade">
      <h3>Filter Logs</h3><hr/>
      <table id="filterlogs" class="table table-striped table-bordered" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>User-ID</th>
                <th>User Name</th>
                <th>Device-ID</th>
                <th>Time</th>
                <th>Status</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>User-ID</th>
                <th>User Name</th>
                <th>Device-ID</th>
                <th>Time</th>
                <th>Status</th>
            </tr>
        </tfoot>
        <tbody>
            <tr>
                <td>User-123</td>
                <td>Tiger Nixon</td>
                <td>d-61</td>
                <td>12:45:60</td>
                <td>New</td>
            </tr>
            <tr>
                <td>User-123</td>
                <td>Yagnesh</td>
                <td>d-65</td>
                <td>12:45:60</td>
                <td>New</td>
            </tr>
          </tbody>
        </table>
    </div>
    <div id="menu2" class="tab-pane fade">
      <h3>Master List</h3><hr/>
      <table id="masterlist" class="table table-striped table-bordered" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>User Name</th>
                <th>Device-ID</th>
                <th>Status</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>User Name</th>
                <th>Device-ID</th>
                <th>Status</th>
            </tr>
        </tfoot>
        <tbody>
            <tr>
                <td>Tiger Nixon</td>
                <td>d-61</td>
                <td>New</td>
            </tr>
            <tr>
                <td>Yagnesh</td>
                <td>d-65</td>
                <td>Not-valid</td>
            </tr>
          </tbody>
        </table>
    </div>
    <div id="menu3" class="tab-pane fade">
      <h3>Import File</h3><hr/>
<form name="form" method="post" action="" enctype="multipart/form-data" >

<br><br><br>
<center><table border="2" >
<tr><center><td colspan="2"><p align="center"><B>UPLOAD THE FILE</B><center></td></tr>
<tr><td><b>Choose the file To Upload:</b></td>
<td><input type="file" name="file" id="fileUpload" accept=".xls,.xlsx" required />
<br /></td></tr> 
<br />
<tr><td colspan="2">
<p id="error1" style="display:none; color:#FF0000;">
Invalid File Format! File Format Must Be Either .xls or .xlsx.
</p>
<p id="error2" style="display:none; color:#FF0000;">
Maximum File Size Limit is 16MB.
</p>
<p align="right"><input name="submit" type="submit" class="btn btn-primary" value="Upload" id="submit" />
</p></td></tr>
<table>
</center> 
</form>

    </div>
  </div>
</div>
<!--<script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'></script>-->
							
 <script src="assets/js/jquery-2.1.4.min.js"></script>
    <script src="assets/js/import_final.js"></script>

<h5> Note: Please upload file having <b>.xls or .xlsx </b> extension and size <b> less than 16 MB </b> </h5>
</body>
</html>
