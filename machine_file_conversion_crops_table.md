---
title: Crops Table
description: Crops Table
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<!-- the following links are referenced throughout this document -->
[1]: https://github.com/Leaf-Agriculture/Leaf-quickstart-Postman-collection
[2]: https://tools.ietf.org/html/rfc7946
[3]: #get-all-files
[4]: #get-a-file
[5]: #get-a-file-summary
[6]: #get-a-files-images
[7]: #upload-a-file
[8]: #get-batch-upload
[9]: #get-a-files-images
[10]: alerts_events#operation-events
[11]: #get-all-batches
[12]: #merge-files
[13]: #get-a-files-units
[sample_summary]: machine_file_conversion_sample_output

### Density
Here we have a table containing the density for most of the crops extracted 
from Leaf's providers, where using these values we can generate volumetric representations of harvest yield from mass
and vice-versa. 

### Standard Moisture
The standard moisture value is used to calculate the dry crop values.
If the crop does not have a value defined in this table, then the API will not calculate the dry value and will repeat the wet values.

| Crops                    | Density (lb/bu) | Dry Moisture (%) |
|--------------------------|----------------:|-------------:|
| alfalfa                  | 100             | 13           |
| annual ryegrass          | 56              |              |
| apples                   | 48              | n/a          |
| barley                   | 47.99           | 15           |
| bean, black              | 60              |              |
| bean, navy               | 67.2            | 15           |
| beans, edible            | 60              |              |
| bent grass               | 14              |              |
| bermuda grass            | 1               |              |
| black eyed peas          | 60.01           |              |
| blue grass               | 14              |              |
| blueberry                | 1               |              |
| boot stage wcs           | 60.01           |              |
| borage                   | 60              |              |
| buckwheat                | 44              |              |
| canola                   | 50              | 15           |
| canola polish            | 52.01           |              |
| chick peas               | 60              | 14           |
| chickpeas                | 60.98           |              |
| clover                   | 60              |              |
| corn                     | 56              | 15           |
| corn cob mix             | 77.69           |              |
| corn silage              | 49.8            |              |
| corn2                    | 56              |              |
| cotton                   | 120.42          |              |
| cranberry                | 1               |              |
| crimson clover           | 60              |              |
| downy bromegrass         | 1               |              |
| durum wheat              | 60              |              |
| edible bean lrg          | 30              |              |
| edible bean med          | 30              |              |
| edible bean sml          | 30              |              |
| edible beans             | 60              | 15           |
| els                      | 32              |              |
| energy cane              | 7.38            |              |
| european barley 6        | 47.99           |              |
| european corn            | 56              |              |
| european oats            | 31.99           |              |
| european peas            | 60.01           |              |
| european popcorn         | 60.01           |              |
| european rye             | 56              |              |
| european spring barley   | 47.99           |              |
| european triticale       | 57.98           |              |
| european wheat feed      | 60.01           |              |
| european wheat wtr       | 60.01           |              |
| european winter barley   | 47.99           |              |
| faber beans              | 60              |              |
| fall barley              | 48              |              |
| fan spring barley        | 48              |              |
| festulolium              | 1               |              |
| field beans              | 60              | 15           |
| field peas               | 60              | 12           |
| flax                     | 60              | 10           |
| forage mix               | 1               |              |
| garlic                   | 1               |              |
| girasol (aceite)         | 71.85           |              |
| grass                    | 14              |              |
| grass alfalfa            | 1               |              |
| grass clover             | 1               |              |
| grass dry                | 100             |              |
| grass half dry           | 100             |              |
| grass seeds              | 22              |              |
| grass wet                | 100             |              |
| hard red spring wheat    | 60.01           |              |
| hard red winter wheat    | 60.01           |              |
| hard white spring wheat  | 60.01           |              |
| hard white winter wheat  | 60.01           |              |
| iceberg salad            | 18.65           |              |
| lentil chilean           | 60.01           |              |
| lentil crimson           | 60.01           |              |
| lentil eston             | 60.01           |              |
| lentil laird             | 60.01           |              |
| lentils                  | 60              | 13           |
| lucerne                  | 54.38           |              |
| lupins                   | 60              |              |
| macadamia                | 1               |              |
| maize                    | 56              |              |
| maize ccm                | 56              |              |
| maize long               | 100             |              |
| maize short              | 100             |              |
| meadowfoam               | 60              |              |
| millet                   | 50              | 13           |
| millet, pearl            | 48              |              |
| miscanthus               | 100             |              |
| mung bean                | 60.01           |              |
| mustard                  | 55              | 9.50         |
| mustard gisilba          | 60.01           |              |
| navy beans               | 61.99           |              |
| oats                     | 32              | 12           |
| oilseed rape winter      | 52.01           |              |
| orchard grass            | 14              |              |
| orchardgrass             | 1               |              |
| other grains             | 40              |              |
| pea trapper              | 60.01           |              |
| peanuts                  | 45              |              |
| peas                     | 60              |              |
| peas, green              | 60              |              |
| pecan                    | 1               |              |
| per ryegrass             | 56              |              |
| popcorn                  | 100             | 14           |
| potatoes                 | 60              |              |
| potatoes for chips       | 60.01           |              |
| potatoes for retail      | 60.01           |              |
| potatoes for starch      | 60.01           |              |
| rape seed                | 60              |              |
| rapeseed                 | 52.01           | 12.50        |
| rapeseed e ind           | 52.01           |              |
| rapeseed e oil           | 52.01           |              |
| raspberry                | 1               |              |
| red grass fescue         | 14              |              |
| reed canary grass        | 1               |              |
| rice                     | 45              | 13           |
| rice long                | 45              |              |
| rice medium              | 45              |              |
| rutabaga                 | 1               |              |
| rye                      | 56              |              |
| safflower                | 38              | 8            |
| sesame                   | 46              |              |
| smooth bromegrass        | 1               |              |
| soft red spring wheat    | 60.01           |              |
| soft red winter wheat    | 60.01           |              |
| soft white spring wheat  | 60.01           |              |
| soft white winter wheat  | 60.01           |              |
| sorghum                  | 56              | 14           |
| soybeans                 | 60              | 13           |
| spring barley            | 48              |              |
| spring rye               | 56              |              |
| spring wheat             | 60              |              |
| sudangrass               | 39.99           |              |
| sugar beet               | 74.66           |              |
| sugar cane               | 80.87           |              |
| sunflower                | 30              | 10           |
| sunflower e ind          | 24.98           |              |
| sunflower e oil          | 24.98           |              |
| sunflower oil            | 28.97           |              |
| sunflower stripe         | 20              |              |
| sunflowers               | 100             |              |
| sweet corn               | 70              |              |
| sweet potatoes           | 50              |              |
| sweet sorghum            | 100             |              |
| tall fescue              | 1               |              |
| timothy grass            | 1               | 12           |
| triticale                | 50              | 13           |
| turnips                  | 55              |              |
| upland cotton            | 32              |              |
| walnut                   | 1               |              |
| watermelon               | 1               |              |
| wheat                    | 60              | 13.50        |
| wheat (hrd rd spr)       | 60              | 13.50        |
| wheat (hrd rd wtr)       | 60              | 13.50        |
| wheat, hard red spring   | 60.01           | 13.50        |
| wheat, hard red winter   | 60.01           | 13.50        |
| wheat, hard white spring | 60.01           | 13.50        |
| wheat, hard white winter | 60.01           | 13.50        |
| wheat, soft red spring   | 60.01           | 13.50        |
| wheat, soft red winter   | 60.01           | 13.50        |
| wheat, soft white spring | 60.01           | 13.50        |
| wheat, soft white winter | 60.01           | 13.50        |
| white clover             | 60              |              |
| white popcorn            | 60.01           |              |
| white wheat              | 60.01           |              |
| whole crop dry           | 100             |              |
| whole crop wet           | 100             |              |
| wild rice                | 45              |              |
| winter barley            | 48              |              |
| winter rye               | 56              |              |
| winter wheat             | 60              |              |
| wood                     | 100             |              |
| yellow popcorn           | 60.01           |              |

If the specific variety of the crop from the file that you 
are trying to process is not present in this table, please contact our support team support@withleaf.io