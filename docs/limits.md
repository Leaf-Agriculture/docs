---
title: Limits
description: Limits
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## About

To ensure reliable performance and fair usage across all users, our API enforces rate limits on requests. These limits are applied globally and are measured over specified time intervals. If a user exceeds these limits, further requests will be temporarily restricted until the interval resets.

## Request Limit

The API allows up to **1000 requests per minute** per user. This global limit applies to all methods and endpoints, regardless of the specific HTTP method used. Once this limit is reached, additional requests will be blocked until the minute resets. Users exceeding this limit will receive a `429 Too Many Requests` error response, prompting them to reduce their request frequency.

## Troubleshooting Rate Limit Errors

When a request exceeds the rate limit, the server will return a `429 Too Many Requests` response. Below are common scenarios and suggested actions for handling rate limits effectively.

| Issue                          | Description                                                                                   | Suggested Action                                                                                   |
|--------------------------------|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **Received 429 Response**      | The rate limit has been exceeded.                                                             | Read the error message to understand the limit and adjust the request frequency accordingly.       |
| **Repeated 429 Errors**        | Too many requests are being sent in a short time frame.                                       | Implement a backoff strategy, increasing the wait time between requests, to avoid repeated errors. |
| **Unexpected Rate Limit Hit**  | Rate limits are being reached unexpectedly, possibly due to high traffic or unexpected load.  | Evaluate your request patterns and consider caching or reducing request frequency where possible.  |

### Error Response Format

When the rate limit is exceeded, you will receive an error response in the following format:

```json
{
  "error": "Request limit exceeded",
  "message": "You have exceeded the maximum allowed requests of 1000 per minute. Please reduce your request rate and try again after a short delay.",
  "status_code": 429
}
```

## Best Practices

- **Implement Retry Logic**: After receiving a 429 response, wait a few seconds before retrying.
- **Backoff Strategy**: If repeated 429 responses occur, consider using an exponential backoff approach, gradually increasing the time between requests.
- **Monitor Usage**: Track your API usage patterns and rate limit hits to optimize request volume and avoid unnecessary retries.

Please don't hesitate to contact us at help@withleaf.io for more information!
:::tip
Please don't hesitate to [contact][contact] us at help@withleaf.io for more information!
:::

[contact]: mailto:help@withleaf.io