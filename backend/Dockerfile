FROM php:7.2-apache

RUN apt-get update \
    && apt-get install -y --no-install-recommends libxml2-dev git unzip \
    && rm -rf /var/lib/apt/lists/* \
    && docker-php-ext-install bcmath pdo_mysql

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

FROM composer:latest as composer
COPY --from=composer /usr/bin/composer /usr/bin/composer

COPY docker/ensure_deps.sh /usr/bin/ensure_deps

EXPOSE 8000

CMD [ "bash" ]
