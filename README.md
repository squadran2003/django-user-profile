# django-user-profile
user profile system built in django, the app includes image cropping,
ability to change login information, a password strength meter which prevents
you from setting week password

# Licence
MIT Licence

## Using the accounts app
* download the accounts stubb
* include the accounts app

```
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django_countries',
    'accounts',
]
```

## include the below into your settings file

```
LOGIN_URL = '/accounts/sign_in'
STATICFILES_DIRS = [

    os.path.join(BASE_DIR, 'accounts/assets'),
]
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'accounts/media/')

```
## Add the accounts urls to your site wide urls

```
url(r'^accounts/', include('accounts.urls', namespace='accounts')),

```
## javascript and css
* include the below into your layout file
```
    <link rel="stylesheet" href="{% static "css/account-styles.css" %}">

    {% block css%}
    {% endblock %}

    {% block accountsjs %}

    {% endblock %}
```
