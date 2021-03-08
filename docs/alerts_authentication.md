---
title: Authentication
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Authentication

It’s very important to confirm that requests received on your webhook are sent from Leaf, to avoid IP spoofing attacks.
To the end, you should verify webhook signatures.

Leaf generates signatures using a hash-based message authentication code (HMAC) with SHA-256, and 
the secret specified when you created the alerts' configuration. 
The signed content has no line breaks, it's a string of the raw JSON with white-spaces after “:” and “,”.

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
request_body_bytes = bytes(json.dumps(raw_content), 'utf-8')
# Sign the request body received with your secret
expected_sig = hmac.digest(msg=request_body_bytes,
                         key=bytes('your secret', 'utf-8'),
                         digest='sha256')

# Get the signature in the X-Leaf-Signature header
request_sig = base64.b64decode(sig_header)
  
# Compare both
hmac.compare_digest(expected_sig, request_sig)
```

  </TabItem>

  <TabItem value="java">

  ```java
byte[] sigHeader;  // Get from the request
String rawContent; // Get from the request

String hmacAlgorithm = "HmacSHA256";
Mac mac = Mac.getInstance("HmacSHA256");
mac.init(new SecretKeySpec("your secret".getBytes(), hmacAlgorithm));
byte[] signatureBytes = mac.doFinal(rawContent.getBytes());

// Compare sigHeader with signatureBytes
MessageDigest.isEqual(sigHeader, signatureBytes)
  ```

  </TabItem>
</Tabs>