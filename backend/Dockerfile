FROM php:7.2-apache

RUN apt-get update \
    && apt-get install -y libxml2-dev \
    && docker-php-ext-install bcmath pdo_mysql

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

EXPOSE 8000

CMD [ "bash" ]
