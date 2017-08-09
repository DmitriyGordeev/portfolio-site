<?php
if(isset($_POST["email"]) && isset($_POST["message"])) {
    mail($_POST["email"], "Какая-то тема письма", wordwrap($_POST["message"],70));
    header("Location: index.html");
}