<?php
require_once('./RestServices.php');
$restServices = new RestServices();
$productList = $restServices->getItemList();
$imageBaseurl = "http://".$_SERVER['SERVER_NAME'].'/'.array_pop(explode('/', dirname(__DIR__,1))).'/';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Doodleblue online Shopping</title>
    <!-- Roboto Font -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://mdbootstrap.com/previews/ecommerce-demo/css/bootstrap.min.css">
    <!-- Material Design Bootstrap -->
    <link rel="stylesheet" href="https://mdbootstrap.com/previews/ecommerce-demo/css/mdb-pro.min.css">
    <!-- Material Design Bootstrap Ecommerce -->
    <link rel="stylesheet" href="https://mdbootstrap.com/previews/ecommerce-demo/css/mdb.ecommerce.min.css">
    <!-- Your custom styles (optional) -->

</head>

<body class="skin-light">

    <!--Main Navigation-->
    <header>

        <!-- Navbar -->
        <nav class="navbar navbar-expand-md navbar-light fixed-top scrolling-navbar">
            <div class="container-fluid">

                <!-- Brand -->
                <a class="navbar-brand" href="#">
                    Doodleblue Shopping
                </a>

                <!-- Collapse button -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Links -->
                <div class="collapse navbar-collapse" id="basicExampleNav">

                    <!-- Right -->
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a href="#!" class="nav-link navbar-link-2 waves-effect">
                                <span class="badge badge-pill red cart-count">0</span>
                                <i class="fas fa-shopping-cart pl-0"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#!" class="nav-link waves-effect">
                                Shop
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#!" class="nav-link waves-effect">
                                Contact
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#!" class="nav-link waves-effect">
                                Sign in
                            </a>
                        </li>
                        <li class="nav-item pl-2 mb-2 mb-md-0">
                            <a href="#!" type="button" class="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Sign
                                up</a>
                        </li>
                    </ul>

                </div>
                <!-- Links -->
            </div>
        </nav>
        <!-- Navbar -->

        <div class="jumbotron color-grey-light mt-70">
            <div class="d-flex align-items-center h-100">
                <div class="container text-center py-5">
                    <h3 class="mb-0">Product List</h3>
                </div>
            </div>
        </div>

    </header>
    <!--Main Navigation-->

    <!--Main layout-->
    <main>
        <div class="container">

            <!--Section: Block Content-->
            <section class="mt-5 mb-4">

                <!--Grid row-->
                <div class="row">
                    <div class="col-lg-8">

                        <!-- Card -->
                        <div class="mb-3">
                            <div class="pt-4 wish-list">
                                <?php foreach ($productList['data'] as $key => $value) { ?>
                                    <div class="row mb-4">
                                        <div class="col-md-5 col-lg-3 col-xl-3">
                                            <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                                <img class="img-fluid w-100" src="<?php echo $imageBaseurl . $value['ItemList']['itemImage']; ?>" alt="Sample">
                                                <a href="#!">
                                                    <div class="mask">
                                                        <img class="img-fluid w-100" src="<?php echo $imageBaseurl . $value['ItemList']['itemImage']; ?>">
                                                        <div class="mask rgba-black-slight"></div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-7 col-lg-9 col-xl-9">
                                            <div>
                                                <div class="d-flex justify-content-between">
                                                    <div>
                                                        <h5><?php echo $value['ItemList']['itemName']; ?></h5>
                                                    </div>
                                                    <div>
                                                        <div class="def-number-input number-input safari_only mb-0 w-100">
                                                            <button class="minus qty-minus-btn" data-priceid="<?php echo $value['priceId'];?>" data-price="<?php echo $value['price']; ?>" data-categoryid="<?php echo $value['productCategoryId']; ?>" data-itemid="<?php echo $value['ItemList']['itemId'] ?>" data-priceid="<?php echo $value['priceId'] ?>"></button>
                                                            <input class="quantity" min="0" name="quantity" value="0" type="number">
                                                            <button class="plus qty-add-btn" data-priceid="<?php echo $value['priceId'];?>" data-price="<?php echo $value['price']; ?>" data-categoryid="<?php echo $value['productCategoryId']; ?>" data-itemid="<?php echo $value['ItemList']['itemId'] ?>" data-priceid="<?php echo $value['priceId'] ?>"></button>
                                                        </div>
                                                        <small id="passwordHelpBlock" class="form-text text-muted text-center">
                                                            (Note, 1 piece)
                                                        </small>
                                                    </div>
                                                </div>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <p class="mb-0"><span><strong>&#8377;<?php echo $value['price']; ?></strong></span></p class="mb-0">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <?php } ?>
                                <hr class="mb-4">
                            </div>
                        </div>
                        <!-- Card -->



                        <!-- Card -->
                        <div class="mb-3">
                            <div class="pt-4">

                                <h5 class="mb-4">We accept</h5>

                                <img class="mr-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa">
                                <img class="mr-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express">
                                <img class="mr-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard">
                                <img class="mr-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png" alt="PayPal acceptance mark">
                            </div>
                        </div>
                        <!-- Card -->

                    </div>
                    <!--Grid column-->
                    <div class="col-lg-4">

                        <!-- Card -->
                        <div class="card mb-4">
                            <div class="card-body">

                                <h5 class="mb-3">The total amount of</h5>

                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Temporary amount &#8377;
                                        <span class="temp-amt">0.00</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Shipping &#8377;
                                        <span>0.00</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>The total amount of</strong>
                                            <strong>
                                                <p class="mb-0">(including GST) &#8377;</p>
                                            </strong>
                                        </div>
                                        <span>&#8377;<strong class="tem-total-amt">0.00</strong></span>
                                    </li>
                                </ul>

                                <button type="button" class="btn btn-primary btn-block waves-effect waves-light">go to
                                    checkout</button>

                            </div>
                        </div>
                        <!-- Card -->

                        <!-- Card -->
                        <div class="card mb-4">
                            <div class="card-body">

                                <a class="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    Add a discount code (optional)
                                    <span><i class="fas fa-chevron-down pt-1"></i></span>
                                </a>

                                <div class="collapse" id="collapseExample">
                                    <div class="mt-3">
                                        <div class="md-form md-outline mb-0">
                                            <input type="text" id="discount-code" class="form-control font-weight-light" placeholder="Enter discount code">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Card -->

                    </div>
                    <!--Grid column-->

                </div>
                <!--Grid row-->

            </section>
            <!--Section: Block Content-->

        </div>
    </main>
    <!--Main layout-->

    <!-- Footer -->
    <footer class="page-footer font-small elegant-color">

        <div class="color-primary">
            <div class="container">

                <!-- Grid row-->
                <div class="row py-4 d-flex align-items-center">

                    <!-- Grid column -->
                    <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                        <h6 class="mb-0">Get connected with us on social networks!</h6>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-6 col-lg-7 text-center text-md-right">

                        <!-- Facebook -->
                        <a class="fb-ic">
                            <i class="fab fa-facebook-f white-text mr-4"> </i>
                        </a>
                        <!-- Twitter -->
                        <a class="tw-ic">
                            <i class="fab fa-twitter white-text mr-4"> </i>
                        </a>
                        <!-- Google +-->
                        <a class="gplus-ic">
                            <i class="fab fa-google-plus-g white-text mr-4"> </i>
                        </a>
                        <!--Linkedin -->
                        <a class="li-ic">
                            <i class="fab fa-linkedin-in white-text mr-4"> </i>
                        </a>
                        <!--Instagram-->
                        <a class="ins-ic">
                            <i class="fab fa-instagram white-text"> </i>
                        </a>

                    </div>
                    <!-- Grid column -->

                </div>
                <!-- Grid row-->

            </div>
        </div>

        <!-- Copyright -->
        <div class="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="https://doodleblue.com/"> doodleblue.com</a>
        </div>
        <!-- Copyright -->

    </footer>
    <!-- Footer -->

    <!-- SCRIPTS -->
    <!-- JQuery -->
    <script src="https://mdbootstrap.com/previews/ecommerce-demo/js/jquery-3.4.1.min.js"></script>
    <!-- Bootstrap tooltips -->
    <script type="text/javascript" src="https://mdbootstrap.com/previews/ecommerce-demo/js/popper.min.js"></script>
    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="https://mdbootstrap.com/previews/ecommerce-demo/js/bootstrap.js"></script>
    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="https://mdbootstrap.com/previews/ecommerce-demo/js/mdb.min.js"></script>
    <!-- MDB Ecommerce JavaScript -->
    <script type="text/javascript" src="https://mdbootstrap.com/previews/ecommerce-demo/js/mdb.ecommerce.min.js"></script>
    <script type="text/javascript" src="./assets/js/cart.js"></script>
    <script>
    </script>
</body>

</html>