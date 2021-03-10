---
title: Authentication
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

It’s very important to confirm that requests received on your webhook are sent from Leaf, to avoid IP spoofing attacks.
To this end, you should verify webhook signatures.

Leaf generates signatures using a hash-based message authentication code (HMAC) with SHA-256, and 
the secret specified when you created the alerts' configuration as the HMAC key.
Be careful with deserialization of the request body when using it to verify the signature. It's recommended that you get the request body as bytes. The signed content has no line breaks, it's a string of the raw JSON with white-spaces after “:” and “,”.

The digest is added to the X-Leaf-Signature header encoded in base 64.

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


# Sign the request body received with your secret
expected_sig = hmac.digest(msg=request_body_bytes,
                           key=bytes('your secret', 'utf-8'),
                           digest='sha256')

# Decode the X-Leaf-Signature header that is encoded in base 64
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
