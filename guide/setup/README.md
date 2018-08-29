# Installation

Omniship utilizes [Composer](https://getcomposer.org/) to manage its dependencies. So, before using Omniship, make sure you have Composer installed on your machine.

For the majority of use cases, you will require `omniship/omniship` and each carrier individually:

```sh
composer require omniship/omniship omniship/dhl
```

If you have the need to use a different HTTP Client rather than Guzzle, which is the default HTTP Client for Omniship, you can require `omniship/common` and any HTTP Client Implementation. Please check [PHP-HTTP](http://docs.php-http.org/en/latest/clients.html) for a list of available HTTP Clients.

```sh
composer require omniship/common omniship/dhl php-http/curl-client
```
