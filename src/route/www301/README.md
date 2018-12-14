# Redirect

In this example we will be deploying a simple redirect from a `www` domain to a naked one.

### Deploy with Now

First, we need to create an empty `index.html`. Then we need to create a `now.json` configuration file to instruct Now how to build the project.

For this example we will be using our newest version [Now 2.0](https://zeit.co/now).

By adding the `version` key to the `now.json` file, we can specify which Now Platform version to use.

We also need to define each builders we would like to use. [Builders](https://zeit.co/docs/v2/deployments/builders/overview/) are modules that take a deployment's source and return an output, consisting of [either static files or dynamic Lambdas](https://zeit.co/docs/v2/deployments/builds/#sources-and-outputs).

In this case we are going to use `@now/static` to properly deploy our `index.html`. We will then work with our `"routes"` configuration to define the behavior of our redirect. In this case, we will set a status header with the code `301` and also forward the path to our redirect location.

```json
{
  "version": 2,
  "alias": ["www.example.sh"],
  "builds": [{ "src": "index.html", "use": "@now/static" }],
  "routes": [
    {
      "src": "/(.*)",
      "status": 301,
      "headers": { "Location": "https://example.sh/$1" }
    }
  ]
}
```

Visit our [documentation](https://zeit.co/docs/v2/deployments/configuration) for more information on the `now.json` configuration file.

We are now ready to deploy the redirect.

```
now
```

Once the deployment is created, you can alias by running:

```
now alias
```
