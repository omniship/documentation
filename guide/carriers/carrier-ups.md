# UPS

### Obtaining API Keys

You'll first need a [UPS developer's account](https://www.ups.com/servlet/registration?loc=en_US&returnto=http%3A%2F%2Fwww.ups.com%2Fe_comm_access%2FlaServ%3Floc%3Den_US).

As soon as you have a UPS account, you'll need to login on the [UPS Online Tools website](https://www.ups.com/servlet/login?loc=en_US&returnto=http%3A%2F%2Fwww.ups.com%2Fe_comm_access%2FlaServ%3Floc%3Den_US%3E) and request an [XML access key](https://www.ups.com/e_comm_access/laServ?START_PAGE=INTRO&CURRENT_PAGE=GET_ACCESS_KEY&OPTION=ACCESS_LIC_XML&loc=en_US%3E).

### Authenticating

```php
<?php

use Omniship\Omniship;

$carrier = Omniship::init('DHL');

$carrier->authenticate(['api_key' => '123456789']);
```
