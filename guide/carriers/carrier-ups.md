---
sidebarDepth: 1
---

# UPS

## Installing

To install this carrier, run the following command on your terminal:

```sh
composer require omniship/ups
```

## Obtaining API Keys

In order to perform requests to the UPS API, you'll need to get ahold of an API Access Key.

First, you'll need an [UPS developer's account](https://www.ups.com/servlet/registration?loc=en_US&returnto=http%3A%2F%2Fwww.ups.com%2Fe_comm_access%2FlaServ%3Floc%3Den_US).

As soon as you have a UPS account, you'll need to login on the [UPS Online Tools website](https://www.ups.com/servlet/login?loc=en_US&returnto=http%3A%2F%2Fwww.ups.com%2Fe_comm_access%2FlaServ%3Floc%3Den_US%3E) and request an [XML access key](https://www.ups.com/e_comm_access/laServ?START_PAGE=INTRO&CURRENT_PAGE=GET_ACCESS_KEY&OPTION=ACCESS_LIC_XML&loc=en_US%3E).

## Authenticating

Now that you have the API Access Key, you'll need to perform authentication.

To do that, first you need to initialize the UPS carrier, then just call the `authenticate()` method.

```php
<?php

use Omniship\Omniship;

$carrier = Omniship::init('DHL');

$carrier->authenticate(['api_key' => '123456789']);
```
