---
title: List of Events
---

## About

This section describes all types of events generated by Leaf and their respective formats.
The types of events are grouped by the services that produce it.

## Operation Events

### Uploaded File Processing Finished

It happens when all steps of the processing of a machine operations file that was uploaded
to Leaf are finished. This event can be useful to trigger a procedure that fetches the file from the API.
This event can be used to activate a procedure that fetches the file from the api,
since processing the file may take some time.

The format of this alert event is:

```json
{
  "fileId": "the id of the uploaded file",
  "leafUserId": "the id of the file owner",
  "timestamp": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
  "type": "uploadedFileProcessingFinished"
}
```

### Uploaded File Processing Failed

It happens when the processing of an operations file that was uploaded to Leaf is finished
but failed in one or more of the processing steps. This event can be useful for identifying
files that have failed and are no longer being processed.

The format of this alert event is:

```json
{
  "fileId": "the id of the uploaded file",
  "leafUserId": "the id of the file owner",
  "message": "details of what happened. May be empty",
  "timestamp": "yyyy-MM-dd'T'HH:mm:ss.SSSSSS'Z'",
  "type": "uploadedFileProcessingFailed"
}
```

## Satellite Events

### New Satellite Image

This event happens when we finish processing a new satellite image for a monitored field.
It can be useful for searching only the new and latest images available in our API.

The format of this alert event is:
```json
{
  "externalId": "the external id of the monitored field",
  "processId": "the id of the process containing new images",
  "timestamp": "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
  "type": "newSatelliteImage"
}
```
