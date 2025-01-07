---
title: Alert Authentication and Security
description: Alerts - Authentication and Security
sidebar_label: Authentication and Security
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Validating Signatures from Leaf

Keeping your webhook secure is essential to ensure that only Leaf sends requests to your endpoint. To help with this, Leaf uses signatures to verify every request.

Here’s how it works:

- Signatures and Secrets: Each webhook request is signed using HMAC with SHA-256. The secret key you set up during the alert’s configuration is used to generate the signature.

- What You Should Do: Use the X-Leaf-Signature header in the request to verify the signature. This ensures the request is genuine and untampered. The digest added to the X-Leaf-Signature header is encoded in base 64.

- Handling the Request Body: Always read the request body as raw bytes before verifying the signature. The signed content is a compact JSON string without extra line breaks or spaces (other than spaces after ":" and ",").

By following these steps, you’ll ensure that your application only processes requests sent by Leaf.

:::info 
Using an `X-CompanyName-Signature` header is a common method of securing webhooks and is used by many companies including [Twilio](https://www.twilio.com/docs/usage/webhooks/webhooks-security) and [Slack](https://api.slack.com/authentication/verifying-requests-from-slack). 
:::


Here is an example on how to verify the request in your webhook:

<Tabs
  defaultValue="py"
  values={[
    { label: 'Python', value: 'py', },
    { label: 'Java', value: 'java', },
  ]}
>
  <TabItem value="py">

```py
import hmac
import base64
import json

payload = 'alert_payload'

# Sign the request body received with your secret
expected_sig = hmac.digest(msg=bytes(json.dumps(payload), 'utf-8'),
                           key=bytes('your secret key', 'utf-8'),
                           digest='sha256')

# Decode the base-64 encoded X-Leaf-Signature header that was sent in the event header
sig_header = "x-leaf-signature-in-header"
request_sig = base64.b64decode(sig_header)

# Compare both
hmac.compare_digest(expected_sig, request_sig)
```

  </TabItem>

  <TabItem value="java">

  ```java
// import java.util.Base64;
// import javax.crypto.Mac;
// import javax.crypto.spec.SecretKeySpec;

byte[] sigHeader;  // Get from the request headers
byte[] rawContent;  // Get the request body

String hmacAlgorithm = "HmacSHA256";
Mac mac = Mac.getInstance("HmacSHA256");
mac.init(new SecretKeySpec("your secret".getBytes(), hmacAlgorithm));
byte[] signatureBytes = mac.doFinal(rawContent);

// Compare sigHeader with signatureBytes
MessageDigest.isEqual(sigHeader, signatureBytes)
  ```

  </TabItem>
</Tabs>

The value `alert_payload` corresponds to the payload of the [alerts](https://docs.withleaf.io/docs/alerts_events/#about).

For example, if you need to authenticate a created field, the `alert_payload` will be:

```json
{
  "source": "REST",
  "leafUserId": "the id of the file owner",
  "fieldId": "the id of the created field",
  "timestamp": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
  "type": "fieldCreated"
}
```

## Webhooks and IP Addresses 

Leaf uses a cloud architecture to provide services, and as such, does not have a fixed range of IP addresses that issue webhooks.

When designing your network architecture, you may wish to have one set of servers and a load balancer in a DMZ that receive webhook requests from Leaf, and then proxy those requests to your private network.