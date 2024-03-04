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
|--------------------------------------|----------------:|-------------:|
| alfalfa                              |   100   |             |
| annual ryegrass                      |    56   |        14   |
| apples                               |      48 |             |
| arugula                              |     1   |             |
| barley                               |   47.99 |        15   |
| basil                                |     1   |             |
| bean, black                          |    60   |             |
| bean, green                          |   78.81 |             |
| bean, navy                           |    67.2 |             |
| bean, pinto                          |   60.99 |             |
| beans, edible                        |    60   |             |
| bell pepper                          |     1   |             |
| bent grass                           |    14   |             |
| bentgrass                            |     1   |             |
| bermuda grass                        |     1   |             |
| black eyed peas                      |   60.01 |             |
| blue grass                           |    14   |             |
| blueberry                            |     1   |             |
| bok choy                             |     1   |             |
| boot stage wcs                       |   60.01 |             |
| borage                               |    60   |             |
| buckwheat                            |    44   |             |
| camassia                             |     1   |             |
| canna                                |     1   |             |
| canola                               |    50   |        10   |
| canola polish                        |   52.01 |             |
| cassava                              |     1   |             |
| catnip                               |     1   |             |
| chasmanthe                           |     1   |             |
| cherries                             |     1   |        13   |
| chick peas                           |    60   |             |
| chickpeas                            |   60.98 |             |
| chives                               |     4.5 |             |
| clover                               |    60   |             |
| coffee                               |  19.769 |             |
| colza                                |   71.09 |             |
| coriander                            |    28   |             |
| corn                                 |    56   |             |
| corn cob mix                         |   77.69 |        13   |
| corn seed                            |     1   |             |
| corn silage                          |   49.80 |             |
| corn, seed                           |   49.57 |             |
| corn, white                          |   56.57 |        13   |
| corn2                                |    56   |             |
| cotton                               |  120.42 |             |
| cranberry                            |     1   |             |
| crimson clover                       |    60   |             |
| downy bromegrass                     |     1   |             |
| durum wheat                          |    60   |             |
| edible bean lrg                      |    30   |             |
| edible bean med                      |      30 |             |
| edible bean sml                      |      30 |             |
| edible beans                         |    60   |             |
| einkorn                              |   18.14 |        13   |
| els                                  |    32   |             |
| emmer                                |   18.14 |        13   |
| energy cane                          |    7.38 |             |
| european barley 6                    |   47.99 |             |
| european corn                        |    56   |             |
| european oats                        |   31.99 |             |
| european peas                        |   60.01 |             |
| european popcorn                     |   60.01 |             |
| european rye                         |    56   |             |
| european spring barley               |   47.99 |             |
| european triticale                   |   57.98 |             |
| european wheat feed                  |   60.01 |             |
| european wheat wtr                   |   60.01 |        14   |
| european winter barley               |   47.99 |             |
| fababean                             |   62.15 |             |
| faber beans                          |    60   |             |
| fall barley                          |    48   |             |
| fan spring barley                    |    48   |        13   |
| fenugreek                            |     1   |             |
| festulolium                          |     1   |             |
| field beans                          |    60   |             |
| field peas                           |    60   |             |
| flax                                 |    60   |        13   |
| forage mix                           |     1   |             |
| fritillaria                          |     1   |             |
| garlic                               |     1   |             |
| girasol (aceite)                     |   71.85 |             |
| grass                                |    14   |             |
| grass alfalfa                        |     1   |        13.5 |
| grass clover                         |     1   |             |
| grass dry                            |  110.40 |             |
| grass half dry                       |   100   |             |
| grass seeds                          |    22   |             |
| grass wet                            |   100   |             |
| green onions                         |     1   |             |
| hard red spring wheat                |   60.01 |             |
| hard red winter wheat                |   60.01 |             |
| hard white spring wheat              |   60.01 |             |
| hard white winter wheat              |   60.01 |             |
| horseradish                          |     1   |             |
| iceberg salad                        |   18.65 |             |
| lentil chilean                       |   60.01 |             |
| lentil crimson                       |   60.01 |             |
| lentil eston                         |   60.01 |             |
| lentil laird                         |   60.01 |             |
| lentils                              |    60   |             |
| lucerne                              |   54.38 |             |
| lupins                               |    60   |             |
| macadamia                            |     1   |             |
| maize                                |    56   |             |
| maize ccm                            |    56   |             |
| maize long                           |   100   |             |
| maize short                          |   100   |             |
| meadowfoam                           |    60   |             |
| millet                               |    50   |         9.5 |
| millet, pearl                        |    48   |             |
| mint                                 |     1   |             |
| miscanthus                           |   100   |             |
| montbretia                           |     1   |             |
| mung bean                            |   60.01 |             |
| mustard                              |    55   |             |
| mustard gisilba                      |   60.01 |             |
| mustard, seed                        |   59.00 |             |
| navy beans                           |   61.99 |             |
| oats                                 |    32   |        12   |
| oilseed rape winter                  |   52.01 |             |
| orchard grass                        |    14   |             |
| orchardgrass                         |     1   |             |
| ornamental allium                    |     1   |             |
| other grains                         |    40   |             |
| parsnip                              |    22.7 |             |
| pea trapper                          |   60.01 |             |
| peanuts                              |    45   |             |
| peas                                 |    60   |             |
| peas, green                          |    60   |             |
| pecan                                |     1   |             |
| per ryegrass                         |    56   |        13   |
| phacelia                             |     1   |             |
| pineapple                            |     1   |        13   |
| popcorn                              |   100   |             |
| potatoes                             |    60   |             |
| potatoes for chips                   |   60.01 |             |
| potatoes for retail                  |   60.01 |             |
| potatoes for starch                  |   60.01 |             |
| pumpkins                             |   43.58 |             |
| quinoa                               |     1   |             |
| radish                               |   52.45 |             |
| rape seed                            |    60   |             |
| rapeseed                             |   52.01 |             |
| rapeseed e ind                       |   52.01 |             |
| rapeseed e oil                       |   52.01 |             |
| raspberry                            |     1   |             |
| red clover                           |     1   |             |
| red grass fescue                     |    14   |             |
| reed canary grass                    |     1   |        12   |
| rice                                 |    45   |             |
| rice long                            |    45   |             |
| rice medium                          |    45   |         8   |
| rutabaga                             |     1   |             |
| rye                                  |    56   |        14   |
| safflower                            |    38   |             |
| sesame                               |    46   |        15   |
| silage corn                          |   60.05 |        10   |
| silvergrass                          |     1   |             |
| smooth bromegrass                    |     1   |             |
| soft red spring wheat                |   60.01 |             |
| soft red winter wheat                |   60.01 |             |
| soft white spring wheat              |   60.01 |        13.5 |
| soft white winter wheat              |   60.01 |        13.5 |
| sorghum                              |    56   |             |
| soybeans                             |    60   |             |
| spelt                                |   18.14 |        13   |
| spider lilies                        |     1   |             |
| spring barley                        |    48   |             |
| spring rye                           |    56   |             |
| spring wheat                         |    60   |             |
| sudangrass                           |   39.99 |             |
| sudex                                |     1   |             |
| sugar beet                           |   74.66 |             |
| sugar cane                           |   80.87 |        10   |
|        sunflower                     |    30   |        13.5 |
| sunflower e ind                      |   24.98 |             |
| sunflower e oil                      |   24.98 |             |
| sunflower oil                        |   28.97 |             |
| sunflower stripe                     |    20   |             |
| sunflower, seed                      |   51.04 |             |
| sunflowers                           |   100   |             |
| sweet corn                           |    70   |        15   |
| sweet potatoes                       |    50   |             |
| sweet sorghum                        |   100   |             |
| tall fescue                          |     1   |             |
| timothy grass                        |     1   |             |
| triticale                            |    50   |             |
| turnip                               |   53.52 |             |
| turnips                              |    55   |        13.5 |
| upland cotton                        |    32   |             |
| walnut                               |     1   |             |
| watermelon                           |     1   |             |
| wheat                                |    60   |             |
| wheat (hrd rd spr)                   |    60   |             |
| wheat (hrd rd wtr)                   |    60   |             |
| wheat, canada prairie spring   red   |   60.01 |             |
| wheat, canada prairie spring   white |   60.01 |         1   |
| wheat, hard red spring               |   60.01 |        13.5 |
| wheat, hard red winter               |   60.01 |        13.5 |
| wheat, hard white spring             |   60.01 |             |
| wheat, hard white winter             |   60.01 |        13.5 |
| wheat, soft red spring               |   60.01 |        13.5 |
| wheat, soft red winter               |   60.01 |        13.5 |
| wheat, soft white spring             |   60.01 |             |
| wheat, soft white winter             |   60.01 |        13.5 |
| white beans                          |   55.16 |             |
| white clover                         |    60   |             |
| white popcorn                        |   60.01 |        12.5 |
| white wheat                          |   60.01 |             |
| whole crop dry                       |   100   |             |
| whole crop wet                       |   100   |             |
| wild rice                            |    45   |             |
| winter barley                        |    48   |             |
| winter rye                           |    56   |        14   |
| winter wheat                         |    60   |             |
| wood                                 |   100   |             |
| yellow popcorn                       |   60.01 |             |
| zantedeschia                         |     1   |             |
| zucchini                             |     1   |             |

If the specific variety of the crop from the file that you 
are trying to process is not present in this table, please contact our support team support@withleaf.io