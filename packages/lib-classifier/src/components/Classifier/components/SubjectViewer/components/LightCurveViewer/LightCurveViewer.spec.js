import { mount } from 'enzyme'
import React from 'react'

import LightCurveViewer from './LightCurveViewer'

const exampleJsonData = {"x": [0.015972205804937783, 0.049305501567639944, 0.0826387925224689, 0.11597207901832955, 0.1493053613899633, 0.18263863995382698, 0.21597191500613158, 0.24930518682578887, 0.28263845567079215, 0.3159717217797322, 0.3493049853730099, 0.38263824665709006, 0.4159715058190064, 0.44930476303309774, 0.48263801845849724, 0.5159712722413682, 0.5493045245177939, 0.5826377754124129, 0.6159710250373583, 0.6493042734996948, 0.6826375208960845, 0.7159707673159801, 0.7493040128415392, 0.7826372575497658, 0.8159705015079624, 0.8493037447855537, 0.8826369874398475, 0.9159702295269104, 0.9493034710992087, 0.9826367122030982, 1.0159699528846982, 1.049303193183988, 1.0826364331422365, 1.115969672791844, 1.1493029121674188, 1.1826361513004429, 1.2159693902194324, 1.2493026289513693, 1.282635867522932, 1.3159691059559482, 1.3493023442731555, 1.3826355824963912, 1.4159688206438261, 1.449302058734882, 1.482635296785901, 1.515968534813292, 1.5493017728327818, 1.582635010858051, 1.615968248901794, 1.649301486978004, 1.6826347250987606, 1.7159679632734803, 1.74930120151429, 1.7826344398308909, 1.8159676782326812, 1.8493009167296652, 1.882634155327916, 1.9159673940371154, 1.9493006328648619, 1.9826338718174934, 2.015967110903233, 2.049300350127197, 2.082633589496093, 2.1159668290150364, 2.1493000686904415, 2.182633308528627, 2.2159665485314313, 2.24929978870613, 2.282633029056664, 2.315966269586975, 2.3492995103003977, 2.382632751203308, 2.4159659922968992, 2.4492992335860415, 2.4826324750743445, 2.515965716763058, 2.5492989586582078, 2.582632200759832, 2.6159654430733497, 2.649298685598808, 2.68263192834101, 2.7159651713008848, 2.749298414482373, 2.7826316578857777, 2.815964901514737, 2.8492981453710704, 2.8826313894563023, 2.915964633774356, 2.9492978783222177, 2.9826311231056195, 3.0159643681264185, 3.0492976133842737, 3.082630858881648, 3.1159641046206255, 3.1492973506018607, 3.182630596826518, 3.215963843296739, 3.2492970900125235, 3.282630336976903, 3.3159635841907877, 3.349296831652358, 3.3826300793676864, 3.4159633273331167, 3.449296575553215, 3.482629824028256, 3.5159630727561555, 3.549296321741726, 3.582629570985309, 3.6159628204856538, 3.649296070245839, 3.682629320265818, 3.7159625705468216, 3.749295821088244, 3.782629071893117, 3.815962322958408, 3.849295574289878, 3.882628825886021, 3.9159620777459074, 3.9492953298731948, 3.9826285822657326, 4.0159618349274995, 4.049295087854214, 4.082628341051977, 4.115961594517415, 4.149294848253608, 4.182628102259296, 4.215961356536316, 4.249294611086185, 4.2826278659070836, 4.315961121000527, 4.349294376367425, 4.38262763200991, 4.415960887924626, 4.449294144116142, 4.4826274005826106, 4.515960657324977, 4.549293914343508, 4.582627171640667, 4.615960429213989, 4.649293687068071, 4.682626945198014, 4.715960203608688, 4.749293462300396, 4.782626721269803, 4.815959980522668, 4.849293240056568, 4.882626499872117, 4.915959759969904, 4.949293020350855, 4.982626281014035, 5.015959541963724, 5.0492928031965505, 5.082626064715583, 5.115959326519875, 5.1492925886085645, 5.182625850985848, 5.215959113650531, 5.249292376603525, 5.282625639843616, 5.315958903372622, 5.349292167192668, 5.382625431301032, 5.415958695700122, 5.4492919603917755, 5.482625225373539, 5.515958490648785, 5.549291756216263, 5.58262502207783, 5.615958288232235, 5.649291554683164, 5.682624821428145, 5.71595808846871, 5.749291355805468, 5.782624623439934, 5.815957891373017, 5.849291159602596, 5.88262442813262, 5.915957696962162, 5.949290966090937, 5.982624235520736, 6.015957505253719, 6.049290775287726, 6.08262404562431, 6.115957316265555, 6.149290587210601, 6.182623858460914, 6.215957130016818, 6.249290401878919, 6.282623674047822, 6.315956946527166, 6.349290219312404, 6.382623492408091, 6.415956765814211, 6.449290039531083, 6.4826233135605, 6.515956587901286, 6.549289862556435, 6.5826231375253785, 6.615956412810505, 6.64928968841095, 6.6826229643269714, 6.7159562405622255, 6.749289517115197, 6.782622793988007, 6.815956071180655, 6.849289348695265, 6.882622626530936, 6.915955904690681, 6.949289183173609, 6.982622461981208, 7.015955741116244, 7.049289020578375, 7.082622300368247, 7.115955580485519, 7.149288860933875, 7.182622141713874, 7.215955422826141, 7.249288704269769, 7.282621986049605, 7.31595526816353, 7.349288550615181, 7.382621833404262, 7.4159551165310615, 7.449288399999233, 7.482621683807537, 7.515954967959952, 7.549288252454015, 7.582621537294311, 7.615954822481105, 7.649288108013233, 7.682621393895801, 7.7159546801279175, 7.749287966712008, 7.782621253647164, 7.815954540937933, 7.849287828582798, 7.882621116585407, 7.915954404946651, 7.949287693667761, 7.982620982748709, 8.015954272193474, 8.049287562003533, 8.082620852177106, 8.115954142719309, 8.149287433630795, 8.182620724912425, 8.21595401656604, 8.249287308594063, 8.282620600997708, 8.31595389377849, 8.349287186937923, 8.382620480479053, 8.415953774401856, 8.449287068710296, 8.482620363403129, 8.515953658485548, 8.549286953958122, 8.582620249822705, 8.61595354608078, 8.649286842735117, 8.682620139788403, 8.715953437240955, 8.749286735096112, 8.782620033354476, 8.815953332020598, 8.849286631095993, 8.882619930582186, 8.915953230479763, 8.949286530794504, 8.982619831527899, 9.015953132680588, 9.049286434256175, 9.082619736257422, 9.115953038686419, 9.149286341546846, 9.18261964483896, 9.215952948567633, 9.249286252734379, 9.28261955734132, 9.315952862393308, 9.349286167890947, 9.382619473839705, 9.415952780240474, 9.449286087095999, 9.482619394411406, 9.515952702188551, 9.54928601042952, 9.582619319139505, 9.615952628321802, 9.649285937977973, 9.682619248111914, 9.715952558727887, 9.74928586983044, 9.782619181419875, 9.815952493502863, 9.849285806082131, 9.882619119160722, 9.91595243274468, 9.949285746836145, 9.98261906143903, 10.01595237655701, 10.049285692197628, 10.082619008360316, 10.11595232505413, 10.149285642280327, 10.182618960044929, 10.215952278351287, 10.249285597206674, 10.282618916613217, 10.315952236576672, 10.3492855571025, 10.382618878196771, 10.415952199862497, 10.44928552210728, 10.482618844934422, 10.515952168352754, 10.549285492364666, 10.582618816978075, 10.615952142197187, 10.649285468030541, 10.682618794483849, 10.715952121561978, 10.749285449270692, 10.782618777620598, 10.815952106616246, 10.849285436264609, 10.882618766573879, 10.915952097551619, 10.949285429202698, 10.982618761538001, 11.015952094564236, 11.04928542828955, 11.082618762721864, 11.115952097872054, 11.149285433745623, 11.182618770354045, 11.21595210770613, 11.249285445810974, 11.282618784677672, 11.315952124318349, 11.349285464742707, 11.38261880595985, 11.415952147980676, 11.449285490817326, 11.482618834482812, 11.515952178987476, 11.549285524342196, 11.582618870561257, 11.615952217657357, 11.64928556564388, 11.682618914533208, 11.71595226434143, 11.749285615080671, 11.782618966768817, 11.815952319418907, 11.849285673048522, 11.882619027672831, 11.915952383309095, 11.949285739976128, 11.98261909768876, 12.015952456469458, 12.04928581633456, 12.082619177305324, 12.115952539402324, 12.149285902646227, 12.182619267059417, 12.215952632664957, 12.249285999484973, 12.282619367544934, 12.315952736868487, 12.349286107483522, 12.382619479416425, 12.415952852695066, 12.449286227346448, 12.482619603402071, 12.515952980892896, 12.549286359849807, 12.582619740306493, 12.615953122296267, 12.649286505854642, 12.682619891017955, 12.715953277824118, 12.74928666630951, 12.782620056516881, 12.815953448484427, 12.849286842256712, 12.882620237872553, 12.915953635379225, 12.949287034818886, 12.98262043623607, 13.015953839676902, 13.049287245186207, 13.082620652807378, 13.115954062583123, 13.14928747455563, 13.182620888764262, 13.215954305242084, 13.249287724019714, 13.2826211451208, 13.315954568556862, 13.349287994333963, 13.382621422436955, 13.415954852835805, 13.44928828547748, 13.482621720278274, 13.515955157117569, 13.549288595837075, 13.58262203621885, 13.615955477988194, 13.649288920788328, 13.682622364187495, 13.715955807650326, 13.749289250539874, 13.78262269211126, 13.815956131510168, 13.849289567787991, 14.085748392278182, 14.186790221647385, 14.22012356910607, 14.253456907675371, 14.286790237868814, 14.320123560249717, 14.353456875408929, 14.386790183935792, 14.420123486404814, 14.453456783363512, 14.48679007532514, 14.520123362767189, 14.553456646127122, 14.586789925803913, 14.620123202160443, 14.65345647552896, 14.686789746204179, 14.720123014454666, 14.753456280524205, 14.786789544630125, 14.8201228069674, 14.853456067716394, 14.886789327033531, 14.920122585065855, 14.953455841943727, 14.986789097783864, 15.020122352694804, 15.05345560677325, 15.086788860107438, 15.12012211277739, 15.15345536485797, 15.186788616413489, 15.220121867507268, 15.253455118193614, 15.286788368522508, 15.320121618543103, 15.353454868296609, 15.386788117823642, 15.420121367159377, 15.453454616338073, 15.48678786538944, 15.52012111434349, 15.553454363224782, 15.5867876120597, 15.620120860867331, 15.653454109672216, 15.686787358491367, 15.72012060734294, 15.753453856245159, 15.786787105211024, 15.820120354256943, 15.853453603395328, 15.886786852640418, 15.920120102000405, 15.953453351490149, 15.986786601115407, 16.020119850891035, 16.053453100820672, 16.086786350916146, 16.12011960118382, 16.15345285163095, 16.186786102264847, 16.220119353090933, 16.25345260411682, 16.286785855347023, 16.320119106786432, 16.353452358441086, 16.386785610315524, 16.420118862412483, 16.45345211473803, 16.486785367295198, 16.520118620088528, 16.55345187312106, 16.586785126395217, 16.620118379914032, 16.65345163368112, 16.686784887699854, 16.7201181419708, 16.75345139649764, 16.786784651283664, 16.820117906328004, 16.853451161637008, 16.886784417207934, 16.92011767304686, 16.953450929151966, 16.986784185527494, 17.020117442173444, 17.05345069909194, 17.086783956284204, 17.120117213752042, 17.153450471495745, 17.186783729517163, 17.220116987817175, 17.253450246396415, 17.286783505257887, 17.3201167643995, 17.35345002382336, 17.386783283531884, 17.420116543523864, 17.45344980380234, 17.486783064365483, 17.520116325215117, 17.55344958635276, 17.586782847777812, 17.620116109491175, 17.653449371494343, 17.68678263378584, 17.720115896369567, 17.753449159241626, 17.78678242240743, 17.820115685864295, 17.8534489496125, 17.88678221365446, 17.92011547798928, 17.953448742616654, 17.986782007539613, 18.02011527275634, 18.053448538267435, 18.086781804073524, 18.12011507017611, 18.15344833657365, 18.186781603268315, 18.220114870258545, 18.2534481375462, 18.286781405132757, 18.320114673014007, 18.353447941194787, 18.38678120967387, 18.420114478450056, 18.45344774752607, 18.486781016901613, 18.520114286575772, 18.553447556550065, 18.586780826824498, 18.620114097399068, 18.653447368274357, 18.686780639450706, 18.72011391092869, 18.75344718270773, 18.7867804547881, 18.820113727171655, 18.85344699985807, 18.886780272846426, 18.92011354613795, 18.953446819733244, 18.986780093630795, 19.02011336783454, 19.053446642340845, 19.08677991715366, 19.120113192270548, 19.153446467693005, 19.18677974342077, 19.220113019454715, 19.25344629579548, 19.286779572442118, 19.3201128493974, 19.35344612665918, 19.386779404228964, 19.420112682106765, 19.4534459602941, 19.486779238790053, 19.52011251759554, 19.55344579671056, 19.586779076135723, 19.620112355871328, 19.65344563591796, 19.68677891627748, 19.72011219694924, 19.753445477932065, 19.786778759228042, 19.820112040837813, 19.853445322761058, 19.886778604998067, 19.92011188755249, 19.953445170420082, 19.986778453603268, 20.020111737103566, 20.053445020920673, 20.086778305054292, 20.120111589507143, 20.153444874278904, 20.18677815936901, 20.220111444778627, 20.2534447305075, 20.286778016558618, 20.320111302931718, 20.353444589626474, 20.38677787664409, 20.420111163984274, 20.453444451649148, 20.486777739639013, 20.52011102795448, 20.553444316595243, 20.58677760556252, 20.620110894857522, 20.653444184481135, 20.68677747443279, 20.720110764715184, 20.753444055327133, 20.786777346271332, 20.820110637547515, 20.85344392915597, 20.886777221098196, 20.92011051337451, 20.953443805986126, 20.986777098934557, 21.020110392220108, 21.053443685843387, 21.086776979805308, 21.120110274107986, 21.15344356874928, 21.18677686373408, 21.220110159060226, 21.253443454729574, 21.28677675074481, 21.32011004710507, 21.35344334381215, 21.38677664086695, 21.420109938270695, 21.453443236023684, 21.48677653412683, 21.520109832583767, 21.553443131392374, 21.586776430556, 21.620109730074933, 21.65344302995037, 21.68677633018417, 21.72010963077629, 21.753442931729193, 21.786776233043753, 21.820109534721222, 21.853442836762486, 21.88677613917027, 21.920109441944277, 21.953442745086022, 21.986776048597324, 22.020109352480613, 22.05344265673679, 22.086775961365873, 22.120109266370275, 22.153442571752702, 22.186775877512588, 22.220109183652927, 22.253442490175882, 22.286775797082015, 22.320109104371976, 22.35344241205029, 22.38677572011513, 22.42010902857105, 22.453442337417147, 22.48677564665918, 22.520108956295626, 22.553442266329217, 22.58677557676209, 22.62010888759453, 22.65344219883168, 22.686775510473876, 22.720108822521684, 22.753442134979093, 22.786775447847265, 22.82010876112928, 22.85344207482663, 22.88677538894052, 22.9201087034749, 22.95344201843098, 22.986775333812403, 23.020108649618862, 23.053441965854905, 23.086775282521454, 23.12010859962304, 23.153441917159956, 23.18677523513648, 23.220108553553786, 23.253441872415248, 23.286775191723553, 23.320108511481475, 23.353441831691715, 23.386775152357302, 23.42010847348006, 23.45344179506363, 23.486775117111346, 23.520108439625933, 23.55344176261043, 23.58677508606878, 23.620108410002796, 23.65344173441731, 23.686775059313874, 23.720108384697, 23.753441710570968, 23.786775036937257, 23.820108363799847, 23.853441691164175, 23.886775019032353, 23.920108347409847, 23.953441676297263, 23.986775005701883, 24.02010833562643, 24.053441666074843, 24.086774997052288, 24.120108328561184, 24.153441660609086, 24.186774993196337, 24.22010832633048, 24.25344166001428, 24.28677499425467, 24.320108329055028, 24.353441664421997, 24.386775000357698, 24.4201083368685, 24.453441673961077, 24.48677501163967, 24.520108349908224, 24.553441688776434, 24.586775028246745, 24.620108368324594, 24.65344170901876, 24.686775050333825, 24.720108392276728, 24.753441734853567, 24.786775078069763, 24.82010842193384, 24.85344176645184, 24.88677511163225, 24.920108457480836, 24.953441804004267, 24.986775151212242, 25.02010849911204, 25.05344184771003, 25.08677519701652, 25.120108547038182, 25.153441897786205, 25.186775249266088, 25.22010860149022, 25.253441954465615, 25.286775308202845, 25.32010866271195, 25.353442018002614, 25.386775374085136, 25.420108730971048, 25.453442088670652, 25.486775447194862, 25.520108806557328, 25.55344216676774, 25.586775527839155, 25.62010888978429, 25.65344225261798, 25.686775616351184, 25.720108980999317, 25.753442346574854, 25.786775713096546, 25.82010908057626, 25.853442449029433, 25.88677581847516, 25.920109188927096, 25.95344256040433, 25.98677593292597, 26.020109306507475, 26.053442681170367, 26.086776056933758, 26.120109433818858, 26.153442811845053, 26.186776191034813, 26.220109571412355, 26.253442952999848, 26.28677633582181, 26.32010971990374, 26.353443105270788, 26.386776491950837, 26.42010987997269, 26.45344326936303, 26.486776660155204, 26.520110052377106, 26.553443446062687, 26.58677684124591, 26.620110237959512, 26.653443636239246, 26.686777036125466, 26.720110437652703, 26.753443840860097, 26.78677724579096, 26.820110652485663, 26.853444060987226, 26.88677747133899, 26.920110883585846, 26.953444297773256, 26.986777713947003, 27.020111132153772, 27.053444552438435, 27.08677797484587, 27.120111399418807, 27.153444826199376, 27.186778255227022, 27.22011168653354, 27.253445120143823, 27.28677855607815, 27.3201119943402, 27.35344543492449, 27.386778877804336, 27.420112322927604, 27.45344577021213, 27.486779219539994, 27.520112670742623, 27.553446123598718, 27.586779577809363, 27.620113032999228, 27.65344648869051, 27.686779944295107, 27.720113399099024, 27.753446852263448, 27.786780302817295], "y": [0.519941250483195, -0.817812979221344, 0.5203485488891602, 0.4720141490300496, -0.6376802921295166, -0.35996238390604657, -0.25086353222529095, 0.2831717332204183, -0.4271964232126872, 0.8452783028284708, -0.828730563322703, -0.12843807538350424, 0.81051637729009, -0.5144228537877401, 0.6784076491991679, 0.10424604018529256, 1.4039228359858196, 1.002088189125061, 0.5850419402122498, 0.06603697935740153, 0.31168510516484577, 1.1315469940503438, 0.8784979581832886, 0.4764373103777568, 2.0488674441973367, -0.24104615052541098, 0.6116951505343119, -0.6183783213297526, 0.03756582736968994, 0.7509812712669373, 1.0540038347244263, 0.077858567237854, 0.2033586303393046, 1.888766884803772, 0.373154878616333, 0.614595909913381, 1.1747504274050395, 0.33564865589141846, 0.4251450300216675, -0.4402150710423787, -0.10087092717488606, -0.3576800227165222, 1.2181649605433147, 0.8458768328030905, 0.7525359590848287, 1.606653134028117, 1.5377129117647808, 1.9806846976280212, 0.9213313460350037, 0.454045832157135, 0.3569672505060832, 1.1973207195599873, 0.3098621964454651, 0.9215374787648519, -0.30433138211568195, 0.00650187333424886, 1.5377029776573181, 0.10818739732106526, 1.2601713339487712, 0.8153592546780905, 0.5679478247960409, 0.36135315895080566, 0.522260864575704, -0.05274514357248942, 0.2966274817784627, 1.092257599035899, -0.4513859748840332, 0.6011277437210083, 0.4984041055043538, 1.2027472257614136, 0.744253396987915, 1.3372724254926045, 0.9387383858362833, 0.5879327654838562, 1.423594852288564, 0.5261277159055074, 0.20628670851389566, -0.2283528447151184, 0.5923236409823099, 1.1577457189559937, -0.3913193941116333, 0.37953009208043414, 0.3615369399388631, 0.30793001254399616, 1.023024320602417, 0.6344343225161234, 0.7532561818758646, 0.9152591228485107, 1.171402633190155, 0.3034944335619609, 0.9673138459523519, 0.8317480484644572, 0.8610760172208151, 1.0613625248273213, -0.2635767062505086, 0.5805368224779764, 1.3789981603622437, -0.5346288283665975, 1.0837266842524211, 1.1441831787427266, -0.45178085565567017, 0.14372169971466064, -0.34523258606592816, 0.4221623142560323, 0.5492319663365682, 1.5978068113327026, 0.9494423866271973, 0.5830004811286926, 2.483069896697998, 0.7725407679875692, 0.8019010225931803, 0.833715001742045, 0.8638848861058553, 1.5436187386512756, -0.28353432814280194, 0.3646959861119588, 0.8410637577374777, 1.2478729089101155, 0.5568588773409525, 0.557499627272288, -1.7463167508443196, -1.5901426474253337, 0.14100968837738037, 0.27881314357121784, 1.718856394290924, 0.6467650334040324, 0.2636934320131938, 0.39437909921010333, -0.009564061959584555, -0.1952598492304484, 0.4136189818382263, 0.3047734498977661, -0.6251235802968343, -0.27253727118174237, -2.106542388598124, -1.0981435577074687, 0.1817221442858378, -0.520127514998118, 0.5015755693117777, 1.2832979361216228, -0.6169999639193217, 0.7696325580279032, 0.1122032602628072, 0.7689322034517924, 0.7582182685534159, 0.1044770081837972, 0.6686970591545105, -0.3379682699839274, 1.0787919163703918, -0.2605964740117391, 0.11333574851353963, 0.8172541856765747, 0.6196151177088419, -0.12262662251790364, 0.47019124031066895, 0.4404013355573018, -0.9340023001035055, 0.5897705753644308, 0.5675032734870911, 0.1603315273920695, 0.041616459687550865, 1.2036884824434917, 0.005766749382019043, -0.27588258186976117, 0.9732122222582499, 0.11855363845825195, 0.6877556443214417, 0.08179495731989543, 0.46269843975702923, 0.11859585841496785, 1.0554442803064983, 0.1875037948290507, -0.40882577498753864, -0.1644591490427653, -0.18339852492014566, -0.3276020288467407, -0.08954604466756184, -0.20339836676915488, 0.7966135938962301, 0.018554429213205974, -0.2564738194147746, 0.054220358530680336, 1.321430007616679, -0.015151997407277426, -0.4086717963218689, -0.5197102824846903, 0.6703808903694153, -1.1663784583409627, 1.1245633165041606, -0.7180372873942057, -0.2648979425430298, 0.1898383100827535, 1.1809120575586955, 0.5304192503293356, -0.015112260977427164, 0.47929584980010986, 0.7960100968678793, 0.7888997594515482, -0.3722161054611206, -0.21741787592569986, 1.0318681597709656, 0.002716978391011556, -0.038998822371164955, 0.3485257426897685, -0.22363662719726562, -0.04346917072931925, -0.058735410372416176, 0.41440874338150024, 0.39056440194447833, -1.1293937762578328, -1.1823922395706177, -0.11495997508366902, 0.26470919450124103, -0.3285159667332967, 0.1981730262438456, -0.3508130709330241, -0.05048513412475586, 0.4007418950398763, -0.8238554199536642, -0.21150211493174234, 0.7202178239822388, 0.1995315154393514, 0.249748428662618, 0.4463866353034973, -0.6453370054562887, 0.1369019349416097, 0.4697789748509725, -0.5688021580378214, 0.08442501227060954, 0.19234418869018555, -0.06121397018432617, -0.22626668214797974, -1.2693578998247783, -1.2588898340861003, -0.04166364669799805, 0.4065235455830892, -0.4012063145637512, -0.4492327570915222, 0.7451499501864115, -0.02281119426091512, 0.15537192424138388, -0.13622144858042398, 0.09774913390477498, -0.2536674340565999, -0.9114717443784078, -0.4607662558555603, -0.32005955775578815, 0.6260896722475687, 0.5088672041893005, 0.4274323582649231, 0.5105858047803243, 1.7299875617027283, 0.12778242429097494, 1.1159380276997883, -0.3720199068387349, 0.8916333317756653, 0.19067774216334024, 0.590925415356954, 1.2624959150950115, -0.42405972878138226, 0.02874682346979777, 0.4672532280286153, 0.26148806015650433, 0.012964010238647461, 0.0855177640914917, 0.2639070153236389, 1.043592890103658, -0.06919602553049724, -0.15936791896820068, -0.2128457029660543, 0.17557293176651, 1.1567473411560059, 0.19217034180959067, -1.2794161836306255, -0.42552004257837933, -0.8526444435119629, 0.1994172732035319, -0.16055007775624594, 0.024624168872833252, -1.2336547176043193, -0.2642199397087097, -0.505430003007253, -0.13838956753412882, -0.30946234862009686, -0.8037984371185303, 0.21947423617045084, -0.01676132281621297, 0.7649287581443787, 0.35007049640019733, -1.107168694337209, -0.6672069430351257, 0.1751631498336792, -0.7703155279159546, -0.7390777269999186, -0.9432832400004069, 0.9165207544962565, -0.10944900910059611, -0.35014500220616657, 0.3388598561286926, -1.2075950702031453, 0.17085919777552286, -0.012015302975972494, 0.46108166376749676, -1.0408113400141399, -0.5548944075902303, -0.9365901350975037, -0.16020238399505615, 0.3737633426984151, 0.3192797303199768, -0.2775763471921285, -0.678427517414093, 0.13987471659978232, 0.26302287975947064, -1.1486758788426716, 0.24911512931187949, -0.6364807486534119, -2.486884593963623, -2.8929909070332847, -1.6980171203613281, -0.7758314410845438, -2.493796229362488, 0.18617014090220133, 0.15988697608311972, 0.06982435782750447, -1.116010049978892, -0.3329813480377197, -0.3833298881848653, 0.25349855422973633, -0.9467750787734985, -1.6125316421190898, -0.5043819546699524, -0.7603665192921957, -0.5850121378898621, -0.6967311104138693, -0.870866080125173, -0.8764217297236124, -1.3057539860407512, -0.24562577406565347, -0.9686897198359171, -0.42500098546346027, -1.158269743124644, -0.4901811480522156, -0.882953405380249, -0.9052877624829611, 0.006084640820821126, -1.1144677797953289, 0.42202075322469074, -1.3889744877815247, -0.9177600344022115, -0.3368581334749858, -0.1620277762413025, -2.3499354918797812, -0.4918624957402547, -0.9376605351765951, -1.1070470015207927, -1.1895025769869487, -1.2793540954589844, -0.5776087443033854, -0.5925248066584269, -0.2892216046651204, 0.12418876091639201, -0.33697734276453656, -1.3656914234161377, -0.669953723748525, -1.412227749824524, -1.6584421197573345, -1.0072241226832073, -1.9158249100049336, -1.5972356001536052, -0.6637250383694967, -1.523911952972412, -2.397144834200541, -1.213197906812032, -1.348416010538737, 0.16143421332041422, -1.343362033367157, -0.6717542807261149, -1.4670367042223613, -0.15466908613840738, -1.8003210425376892, -0.3064696987469991, -1.1576637625694275, -0.813409686088562, -1.018531620502472, -1.299835741519928, -0.1738568147023519, -1.4440690477689107, -1.1806512872378032, -1.4377633730570476, -2.3697937528292337, -1.6427114605903625, -0.681037704149882, -1.014078676700592, -1.2703239917755127, -1.3403072953224182, -2.5244206190109253, -1.9443978667259216, -1.885359485944112, -2.001372476418813, -2.3293172319730124, -0.173260768254598, -1.8428216377894084, -2.309779326121012, -1.6129165887832642, 0.04502385854721069, -0.55874635775884, -0.4735390345255534, -0.3777046998341878, -1.3057092825571697, -0.8606463670730591, -0.5559101700782776, -0.7426043351491293, -0.2505555748939514, -0.1125037670135498, -0.5653177698453268, -1.3486568927764893, -0.5070840318997701, -0.6202980875968933, -1.0863567392031352, -0.48753122488657635, 1.0059848427772522, -1.0295187433560689, 0.014270345369974772, 1.0938122868537903, 0.5282635490099589, 0.7317264874776205, 0.8362308144569397, 0.4799763361612956, 1.6170839468638103, 0.8691176772117615, 1.2378320097923279, 0.7607663671175638, 0.5666613578796387, 1.7060538132985432, 1.9890392820040386, 0.4622216025988261, 2.8829723596572876, 1.5220344066619873, 1.6785686214764912, 1.3194754719734192, -0.2760117252667745, 2.3135915398597717, 2.156910796960195, 1.320744554201762, 1.7350862423578899, 2.295720080534617, 1.7132312059402466, 1.6026596228281658, 1.4820297559102376, 1.2750029563903809, 2.087213099002838, 0.10649114847183228, -0.5746756990750631, 0.613383948802948, 0.44882794221242267, 0.8875230948130289, 0.31911830107371014, 1.0494391123453777, 0.9764159719149271, 2.0663912097613015, 1.9734501838684082, 2.1910121043523154, -0.2063910166422526, 0.8782123525937399, 1.6725783546765645, 1.6222546497980754, 0.966330369313558, 0.8471782008806864, 0.7543712854385376, 0.7439926266670227, 1.197357972462972, 0.059763590494791664, 0.48934419949849445, 1.051505406697591, 0.8251816034317017, 1.0892674326896667, 1.073626180489858, 0.8939007918039957, 0.9411349892616272, 0.7777636249860128, 0.283623735109965, -0.568250815073649, 0.6934826572736105, 0.6233776609102885, 2.150846024354299, 0.09964158137639363, 0.43831268946329754, 0.8621190985043844, 0.5546410878499349, -0.39811432361602783, 0.5632266402244568, 0.49056361118952435, -0.5264853437741598, 1.1210689942042034, 1.8514394760131836, 0.890528162320455, 0.44693052768707275, 0.4596114158630371, 1.0248149434725444, 2.1499122182528176, -0.03442913293838501, 1.153831680615743, 0.359689195950826, 0.5203584829966227, 0.8337348699569702, -3.415378451347351, -0.7639750838279724, 0.9967858592669169, 0.46436736981074017, 1.4077772696812947, 0.5367721120516459, -0.09146581093470256, 2.5614798069000244, 0.6404841939608256, 1.9290720423062642, 0.8448958396911621, 0.7044598460197449, 0.4619136452674866, 0.8342290918032328, 1.096479594707489, -0.38400540749231976, 0.9785865743954977, 1.499454180399577, 0.23493419090906778, 0.7220804691314697, 1.1987189451853435, 1.034003992875417, 0.4958435893058777, 0.9734034538269043, 0.8697733283042908, 0.1317039132118225, 0.6743818521499634, -0.02761681874593099, 0.7349674900372823, -0.1579547921816508, -0.25147199630737305, 0.24109085400899252, 0.8148849010467529, -0.26227037111918133, 1.058561106522878, 1.1508588989575703, 0.04168351491292318, 0.35604586203893024, 0.8361165722211202, 0.329012672106425, -0.43983757495880127, 1.034778853257497, 0.45141826073328656, 0.6654933094978333, 1.6335149606068928, 0.12993812561035156, 0.47622621059417725, 0.8079831798871359, 0.1373042662938436, 1.3288905223210652, 0.7001434763272604, 0.8112390836079916, 0.6142457326253256, 0.18615275621414185, -0.6625751654307047, -0.20114580790201822, 0.9429603815078735, 0.5546510219573975, 0.09354948997497559, 0.04166364669799805, 1.1136258641878765, 0.932350754737854, 0.8241881926854452, 1.227224866549174, -0.01874317725499471, 1.1353020866711934, 1.0018274188041687, 0.20987540483474731, 0.7817819714546204, 1.6269485155741374, 1.1795808871587117, 0.4534001151720683, -0.23090094327926636, 0.8715589841206869, 0.945034126440684, 0.1385385791460673, 0.40755172570546466, 0.1934294899304708, -0.31405190626780194, 0.5660454432169596, -0.401914119720459, -0.23073703050613403, -0.5781203508377075, 0.7378508647282919, 0.5142067869504293, 0.6565550963083903, -0.17468631267547607, -0.1989478866259257, -0.3028710683186849, 0.11042257150014241, -0.41270752747853595, 0.27900685866673786, 1.2798433502515156, 0.9833599130312601, 1.1875107884407043, -0.5800525347391764, -0.6542752186457316, 1.337110996246338, 0.20237267017364502, 0.380977988243103, 0.41799743970235187, 0.39591391881306964, 0.27305881182352704, 0.2541343371073405, 0.737835963567098, 0.6482203801472982, -0.2393523852030436, -0.016398727893829346, -0.06463378667831421, -0.1852040489514669, -0.019416213035583496, 0.35423537095387775, 0.46309083700180054, 0.5104616284370422, 0.9554301699002584, -0.23709734280904135, 0.16425549983978271, 0.0035216410954793296, 0.3315260012944539, 0.5395462115605673, -0.8174628019332886, 0.9003753463427225, 0.7333829998970032, 0.17389903465906778, 0.37627418835957843, 0.5488122502962748, 0.31307339668273926, 0.7924859722455343, 1.0492975513140361, 0.7230242093404134, 0.10244548320770264, 0.24174402157465616, 0.9001493453979492, -0.48887977997461957, 0.39432694514592487, 0.06617605686187744, -0.842556357383728, 0.5371396740277609, 0.09953230619430542, -0.32995641231536865, 0.12315064668655396, 0.5433435241381327, -0.27369459470113117, -0.12675921122233072, 0.9661192695299784, -0.35692503054936725, -0.4215314984321594, 1.349496344725291, 0.3960256775220235, -0.14533847570419312, 0.284371276696523, -0.729521115620931, 0.14343857765197754, -1.78262593348821, -0.2577255169550578, -0.7898037632306417, -0.4179527362187703, -0.450819730758667, 0.7257635394732157, 0.39849430322647095, 0.4633590579032898, 0.39068857828776044, -0.14312813679377237, -0.5068033933639526, 0.310880442460378, 1.1357540885607402, -1.0011171301205952, -0.10927766561508179, -1.0635505119959514, -0.8027404546737671, -1.3699630896250408, -0.6051808595657349, -0.49855560064315796, 0.6569052735964457, -0.32900770505269367, -0.8082836866378784, -0.33526867628097534, 0.970145066579183, 0.5058298508326212, -1.0989879568417866, -0.7510334253311157, -0.7582257191340128, -1.3009111086527507, -0.6882896025975546, -0.2748047312100728, -1.3274674614270527, -0.38978209098180133, -0.635919471581777, -0.8614137768745422, 0.7379228870073954, -0.654853880405426, -0.586715837319692, -0.34419695536295575, 0.9210631251335144, -0.525839626789093, -0.7517337799072266, -3.9630035559336343, -2.0255669752756753, -0.17404804627100626, 0.36553293466567993, -0.7715970277786255, -1.2969250480333965, -1.123778522014618, -0.8316983779271444, -0.4892324407895406, -1.6117940346399944, -0.40660301844278973, -1.327293614546458, -0.5432839194933573, -0.8484323819478353, -0.8978769183158875, -0.998218854268392, -0.38929283618927, 0.2016077438990275, -0.21600474913915, -0.0902290145556132, -1.1228596170743306, -0.8906349539756775, -0.25641173124313354, -1.4268358548482258, 0.08461127678553264, -0.05739927291870117, 1.1498183012008667, -0.3679320216178894, -1.774035394191742, -0.7933576901753744, -0.4536360502243042, -0.3140469392140706, -0.0015323360761006672, 0.19280115763346353, -0.7075220346450806, -0.499794880549113, -1.2227917710940044, -0.6331826249758402, 1.1111597220102947, -1.3750915726025899, -0.819668173789978, -1.568409303824107, -1.4833733439445496, -0.7433419426282247, -1.2061074376106262, 0.7746567328770956, -0.971632699171702, -2.1784057219823203, -1.0058234135309856, -1.2070114612579346, -1.4665474494298298, -0.70734570423762, -0.9787951906522115, -1.2652799487113953, -0.9896482030550638, -1.002281904220581, -1.503807802995046, -0.3303438425064087, -0.2956762909889221, -0.4012410839398702, -0.8311271667480469, -0.8328929543495178, -1.0331595937410991, -0.28516848882039386, -0.9420141577720642, -0.1546517014503479, -1.5429258346557617, -1.0719150304794312, -0.7851868867874146, -0.8926093578338623, -1.9667521119117737, 0.3237202763557434, -1.264063020547231, -0.22800018390019736, -1.615700622399648, -0.6571436921755472, -0.3682821989059448, -1.8160541852315266, -1.6817028323809307, -0.8075560132662455, -0.8795758287111918, -0.5112141370773315, -1.6007274389266968, -0.12250244617462158, -1.151318351427714, 0.14137476682662964, -1.3877550760904949, -1.0348310073216755, -0.6156265735626221, -0.3098572293917338, -0.7281129558881124, -1.3128022352854412, -2.441681921482086, -1.3699357708295186, -0.0913838545481364, -0.18591185410817465, 0.30504415432612103, -0.4595046242078145, -0.11816869179407756, -0.5603358149528503, -0.18697232007980347, -0.10232130686442058, -0.8631348609924316, -1.642306645711263, -1.114105184872945, -1.9939343134562175, -1.595368007818858, -0.5785698692003886, -1.7222811778386433, -2.0870442191759744, -2.5285258889198303, -1.4033665259679158, -1.7584462960561116, -1.3855298360188801, -0.16359736522038779, -1.1347259084383647, -1.718476414680481, -1.7710129419962566, -1.2502471605936687, -0.8499125639597574, 0.1972739895184835, -0.9629180034001669, -0.24834523598353067, 1.0447899500528972, -0.08262197176615398]}

let wrapper, d3svg

describe('Component > LightCurveViewer', function () {
  beforeEach(function () {
    wrapper = mount(<LightCurveViewer jsonData={exampleJsonData} />)  //Use mount() instead of shallow() since d3 logic exists outside of render()
    d3svg = wrapper.instance().d3svg  //Instance of the D3 <svg> element, generated 
  })

  it('should render without crashing', function () {
    expect(d3svg).to.exist
  })

  it('should render an svg with data points based on the subject prop', function () {
    const numberOfDataPointsRendered = d3svg.selectAll('.data-point').size()
    const numberOfDataPointsExpected = exampleJsonData.x.length
    
    expect(numberOfDataPointsRendered).to.equal(numberOfDataPointsExpected)
  })
})
