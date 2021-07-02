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

| Crops                  |Density (lb/bu)| 
|------------------------|-----| 
| sunflower              | 30  | 
| turnips                | 55  | 
| wheat (hrd rd spr)     | 60  | 
| wheat (hrd rd wtr)     | 60  | 
| fan spring barley      | 48  | 
| alfalfa                | 100 | 
| barley                 | 48  | 
| edible beans           | 60  | 
| navy beans             | 62  | 
| canola                 | 50  | 
| flax                   | 60  | 
| grass seeds            | 22  | 
| lentils                | 60  | 
| millet                 | 50  | 
| mustard                | 55  | 
| oats                   | 32  | 
| black eyed peas        | 60  | 
| field peas             | 60  | 
| yellow popcorn         | 60  | 
| white popcorn          | 60  | 
| rapeseed               | 52  | 
| rice long              | 45  | 
| rice medium            | 45  | 
| rye                    | 56  | 
| safflower              | 38  | 
| sorghum                | 56  | 
| sunflower oil          | 29  | 
| sunflower stripe       | 20  | 
| durum wheat            | 60  | 
| hard red spring wheat  | 60  | 
| hard red winter wheat  | 60  | 
| soft red winter wheat  | 60  | 
| white wheat            | 60  | 
| chickpeas              | 61  | 
| lupins                 | 60  | 
| european spring barley | 48  | 
| european winter barley | 48  | 
| european barley 6      | 48  | 
| european corn          | 56  | 
| european oats          | 32  | 
| european peas          | 60  | 
| european popcorn       | 60  | 
| rapeseed e ind         | 52  | 
| european rye           | 56  | 
| sunflower e ind        | 25  | 
| sunflower e oil        | 25  | 
| european triticale     | 58  | 
| european wheat feed    | 60  | 
| european wheat wtr     | 60  | 
| rapeseed e oil         | 52  |
| oilseed rape winter    | 52  | 
| buckwheat              | 44  | 
| lucerne                | 54  | 
| peanuts                | 45  | 
| sweet potatoes         | 50  | 
| potatoes for chips     | 60  | 
| potatoes for retail    | 60  | 
| potatoes for starch    | 60  | 
| sesame                 | 46  | 
| sweet corn             | 70  | 
| corn                   | 56  | 
| soybeans               | 60  | 
| boot stage wcs         | 60  | 
| mung bean              | 60  | 
| sudangrass             | 40  | 
| canola polish          | 52  | 
| mustard gisilba        | 60  | 
| lentil crimson         | 60  | 
| lentil eston           | 60  | 
| lentil chilean         | 60  | 
| lentil laird           | 60  | 
| pea trapper            | 60  | 
| garlic                 | 1   | 
| rutabaga               | 1   | 
| macadamia              | 1   | 
| pecan                  | 1   | 
| walnut                 | 1   | 
| blueberry              | 1   | 
| cranberry              | 1   | 
| raspberry              | 1   | 
| watermelon             | 1   | 
| orchardgrass           | 1   | 
| downy bromegrass       | 1   | 
| smooth bromegrass      | 1   | 
| reed canary grass      | 1   | 
| tall fescue            | 1   | 
| timothy grass          | 1   | 
| bermuda grass          | 1   | 
| festulolium            | 1   | 
| grass clover           | 1   | 
| grass alfalfa          | 1   | 
| forage mix             | 1   | 
| wheat                  | 60  | 
| winter rye             | 56  | 
| winter barley          | 48  | 
| popcorn                | 100 | 
| corn2                  | 56  | 
| rice                   | 45  | 
| sunflowers             | 100 | 
| maize ccm              | 56  | 
| maize                  | 56  | 
| other grains           | 40  | 
| fall barley            | 48  | 
| spring barley          | 48  | 
| faber beans            | 60  | 
| field beans            | 60  | 
| borage                 | 60  | 
| crimson clover         | 60  | 
| white clover           | 60  | 
| bent grass             | 14  | 
| blue grass             | 14  | 
| red grass fescue       | 14  | 
| orchard grass          | 14  | 
| grass                  | 14  | 
| annual ryegrass        | 56  | 
| meadowfoam             | 60  | 
| chick peas             | 60  | 
| rape seed              | 60  | 
| wild rice              | 45  | 
| per ryegrass           | 56  | 
| spring rye             | 56  | 
| triticale              | 50  | 
| spring wheat           | 60  | 
| winter wheat           | 60  | 
| els                    | 32  | 
| upland cotton          | 32  | 
| maize long             | 100 | 
| maize short            | 100 | 
| grass wet              | 100 | 
| grass half dry         | 100 | 
| grass dry              | 100 | 
| whole crop wet         | 100 | 
| whole crop dry         | 100 | 
| miscanthus             | 100 | 
| wood                   | 100 | 
| sweet sorghum          | 100 | 
