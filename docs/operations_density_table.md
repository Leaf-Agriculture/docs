---
title: Density Table
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
[sample_summary]: operations_sample_output

Here we have a table containing the density for most of the crops extracted 
from Leaf's providers, where using these values we can generate volumetric representations of harvest yield from mass
and vice-versa. 

| Crops                    |Density (lb/bu)| 
|--------------------------|--------| 
| sunflower                | 30     |
| turnips                  | 55     |
| wheat (hrd rd spr)       | 60     |
| wheat (hrd rd wtr)       | 60     |
| fan spring barley        | 48     |
| apples                   | 48     |
| alfalfa                  | 100    |
| barley                   | 47.99  |
| edible beans             | 60     |
| bean, navy               | 67.2   |
| edible bean lrg          | 30     |
| edible bean med          | 30     |
| edible bean sml          | 30     |
| navy beans               | 61.99  |
| energy cane              | 7.38   |
| sugar cane               | 80.87  |
| sugar beet               | 74.66  |
| canola                   | 50     |
| cotton                   | 120.42 |
| flax                     | 60     |
| grass seeds              | 22     |
| lentils                  | 60     |
| millet                   | 50     |
| millet, pearl            | 48     |
| mustard                  | 55     |
| oats                     | 32     |
| black eyed peas          | 60.01  |
| field peas               | 60     |
| yellow popcorn           | 60.01  |
| white popcorn            | 60.01  |
| corn silage              | 49.8   |
| rapeseed                 | 52.01  |
| rice long                | 45     |
| rice medium              | 45     |
| rye                      | 56     |
| safflower                | 38     |
| sorghum                  | 56     |
| girasol (aceite)         | 71.85  |
| sunflower oil            | 28.97  |
| sunflower stripe         | 20     |
| durum wheat              | 60     |
| white wheat              | 60.01  |
| iceberg salad            | 18.65  |
| chickpeas                | 60.98  |
| lupins                   | 60     |
| european spring barley   | 47.99  |
| european winter barley   | 47.99  |
| european barley 6        | 47.99  |
| european corn            | 56     |
| european oats            | 31.99  |
| european peas            | 60.01  |
| european popcorn         | 60.01  |
| rapeseed e ind           | 52.01  |
| european rye             | 56     |
| sunflower e ind          | 24.98  |
| sunflower e oil          | 24.98  |
| european triticale       | 57.98  |
| european wheat feed      | 60.01  |
| european wheat wtr       | 60.01  |
| rapeseed e oil           | 52.01  |
| buckwheat                | 44     |
| lucerne                  | 54.38  |
| peanuts                  | 45     |
| sweet potatoes           | 50     |
| potatoes for chips       | 60.01  |
| potatoes for retail      | 60.01  |
| potatoes for starch      | 60.01  |
| sesame                   | 46     |
| sweet corn               | 70     |
| corn                     | 56     |
| soybeans                 | 60     |
| boot stage wcs           | 60.01  |
| mung bean                | 60.01  |
| sudangrass               | 39.99  |
| canola polish            | 52.01  |
| mustard gisilba          | 60.01  |
| lentil crimson           | 60.01  |
| lentil eston             | 60.01  |
| lentil chilean           | 60.01  |
| lentil laird             | 60.01  |
| pea trapper              | 60.01  |
| garlic                   | 1      |
| rutabaga                 | 1      |
| macadamia                | 1      |
| pecan                    | 1      |
| walnut                   | 1      |
| blueberry                | 1      |
| cranberry                | 1      |
| raspberry                | 1      |
| watermelon               | 1      |
| orchardgrass             | 1      |
| downy bromegrass         | 1      |
| smooth bromegrass        | 1      |
| reed canary grass        | 1      |
| tall fescue              | 1      |
| timothy grass            | 1      |
| bermuda grass            | 1      |
| festulolium              | 1      |
| clover                   | 60     |
| grass clover             | 1      |
| grass alfalfa            | 1      |
| forage mix               | 1      |
| wheat                    | 60     |
| winter rye               | 56     |
| winter barley            | 48     |
| popcorn                  | 100    |
| corn2                    | 56     |
| corn cob mix             | 77.69  |
| rice                     | 45     |
| sunflowers               | 100    |
| maize ccm                | 56     |
| maize                    | 56     |
| other grains             | 40     |
| fall barley              | 48     |
| spring barley            | 48     |
| faber beans              | 60     |
| field beans              | 60     |
| borage                   | 60     |
| crimson clover           | 60     |
| white clover             | 60     |
| bent grass               | 14     |
| blue grass               | 14     |
| red grass fescue         | 14     |
| orchard grass            | 14     |
| grass                    | 14     |
| annual ryegrass          | 56     |
| meadowfoam               | 60     |
| chick peas               | 60     |
| rape seed                | 60     |
| wild rice                | 45     |
| per ryegrass             | 56     |
| spring rye               | 56     |
| triticale                | 50     |
| spring wheat             | 60     |
| winter wheat             | 60     |
| els                      | 32     |
| upland cotton            | 32     |
| maize long               | 100    |
| maize short              | 100    |
| grass wet                | 100    |
| grass half dry           | 100    |
| grass dry                | 100    |
| whole crop wet           | 100    |
| whole crop dry           | 100    |
| miscanthus               | 100    |
| wood                     | 100    |
| sweet sorghum            | 100    |
| oilseed rape winter      | 52.01  |
| beans, edible            | 60     |
| bean, black              | 60     |
| peas                     | 60     |
| peas, green              | 60     |
| potatoes                 | 60     |
| hard red spring wheat    | 60.01  |
| hard red winter wheat    | 60.01  |
| soft red winter wheat    | 60.01  |
| soft red spring wheat    | 60.01  |
| hard white spring wheat  | 60.01  |
| hard white winter wheat  | 60.01  |
| soft white winter wheat  | 60.01  |
| soft white spring wheat  | 60.01  |
| wheat, soft red winter   | 60.01  |
| wheat, hard red winter   | 60.01  |
| wheat, hard red spring   | 60.01  |
| wheat, soft red spring   | 60.01  |
| wheat, hard white winter | 60.01  |
| wheat, soft white winter | 60.01  |
| wheat, hard white spring | 60.01  |
| wheat, soft white spring | 60.01  |

If the specific variety of the crop from the file that you 
are trying to process is not present in this table, please contact our support team support@withleaf.io