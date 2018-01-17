# Days Without - A simple example of using ngrx store

In days without, you can add a counter for determining how many days you have gone with or without doing a certain goal for as many goals as you'd like.

## Getting Started

* Install ruby version 2.3.4
* Run "gem install bundler"
* Run "bundle install --path=vendor/bundle"
* Run mysql commands below
* Run "bundle exec rake db:migrate"
* Run "bundle exec rake start_server"
* Visit http://localhost:3000 in the browser

## MySQL commands

```
create database ngrx_store_demo_dev;
CREATE USER 'ngrx_demo_user'@'localhost' IDENTIFIED BY 'fake_pass';
GRANT ALL PRIVILEGES ON \`ngrx_store_demo\_%\`.* TO 'ngrx_demo_user'@'localhost';
```