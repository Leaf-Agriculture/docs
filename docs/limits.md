---
title: Limits
description: Limits
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## About

To ensure reliable performance and fair usage across all users, our API enforces rate limits on requests. These limits are applied on a per-method basis and are measured over specified time intervals. Each method has defined thresholds for the number of requests allowed per user within these intervals. If the rate limit for a method is exceeded, further requests will be temporarily restricted until the time interval resets.


## Limits TreshHold

| HTTP Method | Requests per Second |
|-------------|----------------------|
| GET         | 10                   |
| POST        | 5                    |
| PUT         | 3                    |
| DELETE      | 2                    |
| PATCH       | 2                    |


## Troubleshooting Rate Limit Errors

When a request exceeds the rate limit for a given API method, the server will return a `429 Too Many Requests` response. This response includes a `Retry-After` header indicating the number of seconds to wait before retrying the request. Below are some common scenarios and suggested actions for handling rate limits effectively.

| Issue                          | Description                                                                                   | Suggested Action                                                                                   |
|--------------------------------|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **Received 429 Response**      | The rate limit for the requested method has been exceeded.                                    | Read the `Retry-After` header value to determine the wait time before making another request.      |
| **Repeated 429 Errors**        | Too many requests are being sent in a short time frame.                                       | Implement a backoff strategy, increasing the wait time between requests, to avoid repeated errors. |
| **Invalid Retry-After Handling** | Ignoring the `Retry-After` header and continuing to send requests.                           | Ensure your code respects the `Retry-After` value to avoid unnecessary rate-limit errors.          |
| **Unexpected Rate Limit Hit**  | Rate limits are being reached unexpectedly, possibly due to high traffic or unexpected load.  | Evaluate your request patterns and consider caching or reducing request frequency where possible.  |

**Best Practices**:
- **Implement Retry Logic**: Use the `Retry-After` header to adjust your request timing. Wait at least the number of seconds specified before retrying.
- **Backoff Strategy**: If repeated 429 responses occur, consider using an exponential backoff approach, gradually increasing the time between requests.
- **Monitor Usage**: Track your API usage patterns and rate limit hits to optimize request volume and avoid unnecessary retries.
