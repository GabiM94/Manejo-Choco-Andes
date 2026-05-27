var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Conectividadestructural_1 = new ol.format.GeoJSON();
var features_Conectividadestructural_1 = format_Conectividadestructural_1.readFeatures(json_Conectividadestructural_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conectividadestructural_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conectividadestructural_1.addFeatures(features_Conectividadestructural_1);
var lyr_Conectividadestructural_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Conectividadestructural_1, 
                style: style_Conectividadestructural_1,
                popuplayertitle: 'Conectividad estructural',
                interactive: true,
    title: 'Conectividad estructural<br />\
    <img src="styles/legend/Conectividadestructural_1_0.png" /> Bloque 1<br />\
    <img src="styles/legend/Conectividadestructural_1_1.png" /> Bloque 2<br />' });
var lyr_Conectividadfuncional_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Conectividad funcional<br />\
    <img src="styles/legend/Conectividadfuncional_2_0.png" /> 0,0000<br />\
    <img src="styles/legend/Conectividadfuncional_2_1.png" /> 1608,3579<br />\
    <img src="styles/legend/Conectividadfuncional_2_2.png" /> 3216,7158<br />\
    <img src="styles/legend/Conectividadfuncional_2_3.png" /> 4825,0737<br />\
    <img src="styles/legend/Conectividadfuncional_2_4.png" /> 6433,4316<br />\
    <img src="styles/legend/Conectividadfuncional_2_5.png" /> 8041,7895<br />\
    <img src="styles/legend/Conectividadfuncional_2_6.png" /> 9650,1474<br />\
    <img src="styles/legend/Conectividadfuncional_2_7.png" /> 11258,5053<br />\
    <img src="styles/legend/Conectividadfuncional_2_8.png" /> 12866,8632<br />\
    <img src="styles/legend/Conectividadfuncional_2_9.png" /> 14475,2211<br />\
    <img src="styles/legend/Conectividadfuncional_2_10.png" /> 16083,5790<br />\
    <img src="styles/legend/Conectividadfuncional_2_11.png" /> 17691,9369<br />\
    <img src="styles/legend/Conectividadfuncional_2_12.png" /> 19300,2948<br />\
    <img src="styles/legend/Conectividadfuncional_2_13.png" /> 20908,6527<br />\
    <img src="styles/legend/Conectividadfuncional_2_14.png" /> 22517,0106<br />\
    <img src="styles/legend/Conectividadfuncional_2_15.png" /> 24125,3685<br />\
    <img src="styles/legend/Conectividadfuncional_2_16.png" /> 25733,7264<br />\
    <img src="styles/legend/Conectividadfuncional_2_17.png" /> 27342,0843<br />\
    <img src="styles/legend/Conectividadfuncional_2_18.png" /> 28950,4422<br />\
    <img src="styles/legend/Conectividadfuncional_2_19.png" /> 30558,8001<br />\
    <img src="styles/legend/Conectividadfuncional_2_20.png" /> 32167,1580<br />\
    <img src="styles/legend/Conectividadfuncional_2_21.png" /> 33775,5159<br />\
    <img src="styles/legend/Conectividadfuncional_2_22.png" /> 35383,8738<br />\
    <img src="styles/legend/Conectividadfuncional_2_23.png" /> 36992,2317<br />\
    <img src="styles/legend/Conectividadfuncional_2_24.png" /> 38600,5896<br />\
    <img src="styles/legend/Conectividadfuncional_2_25.png" /> 40208,9475<br />\
    <img src="styles/legend/Conectividadfuncional_2_26.png" /> 41817,3054<br />\
    <img src="styles/legend/Conectividadfuncional_2_27.png" /> 43425,6633<br />\
    <img src="styles/legend/Conectividadfuncional_2_28.png" /> 45034,0212<br />\
    <img src="styles/legend/Conectividadfuncional_2_29.png" /> 46642,3791<br />\
    <img src="styles/legend/Conectividadfuncional_2_30.png" /> 48250,7370<br />\
    <img src="styles/legend/Conectividadfuncional_2_31.png" /> 49859,0949<br />\
    <img src="styles/legend/Conectividadfuncional_2_32.png" /> 51467,4528<br />\
    <img src="styles/legend/Conectividadfuncional_2_33.png" /> 53075,8107<br />\
    <img src="styles/legend/Conectividadfuncional_2_34.png" /> 54684,1686<br />\
    <img src="styles/legend/Conectividadfuncional_2_35.png" /> 56292,5265<br />\
    <img src="styles/legend/Conectividadfuncional_2_36.png" /> 57900,8844<br />\
    <img src="styles/legend/Conectividadfuncional_2_37.png" /> 59509,2422<br />\
    <img src="styles/legend/Conectividadfuncional_2_38.png" /> 61117,6001<br />\
    <img src="styles/legend/Conectividadfuncional_2_39.png" /> 62725,9580<br />\
    <img src="styles/legend/Conectividadfuncional_2_40.png" /> 64334,3159<br />\
    <img src="styles/legend/Conectividadfuncional_2_41.png" /> 65942,6738<br />\
    <img src="styles/legend/Conectividadfuncional_2_42.png" /> 67551,0317<br />\
    <img src="styles/legend/Conectividadfuncional_2_43.png" /> 69159,3896<br />\
    <img src="styles/legend/Conectividadfuncional_2_44.png" /> 70767,7475<br />\
    <img src="styles/legend/Conectividadfuncional_2_45.png" /> 72376,1054<br />\
    <img src="styles/legend/Conectividadfuncional_2_46.png" /> 73984,4633<br />\
    <img src="styles/legend/Conectividadfuncional_2_47.png" /> 75592,8212<br />\
    <img src="styles/legend/Conectividadfuncional_2_48.png" /> 77201,1791<br />\
    <img src="styles/legend/Conectividadfuncional_2_49.png" /> 78809,5370<br />\
    <img src="styles/legend/Conectividadfuncional_2_50.png" /> 80417,8949<br />\
    <img src="styles/legend/Conectividadfuncional_2_51.png" /> 82026,2528<br />\
    <img src="styles/legend/Conectividadfuncional_2_52.png" /> 83634,6107<br />\
    <img src="styles/legend/Conectividadfuncional_2_53.png" /> 85242,9686<br />\
    <img src="styles/legend/Conectividadfuncional_2_54.png" /> 86851,3265<br />\
    <img src="styles/legend/Conectividadfuncional_2_55.png" /> 88459,6844<br />\
    <img src="styles/legend/Conectividadfuncional_2_56.png" /> 90068,0423<br />\
    <img src="styles/legend/Conectividadfuncional_2_57.png" /> 91676,4002<br />\
    <img src="styles/legend/Conectividadfuncional_2_58.png" /> 93284,7581<br />\
    <img src="styles/legend/Conectividadfuncional_2_59.png" /> 94893,1160<br />\
    <img src="styles/legend/Conectividadfuncional_2_60.png" /> 96501,4739<br />\
    <img src="styles/legend/Conectividadfuncional_2_61.png" /> 98109,8318<br />\
    <img src="styles/legend/Conectividadfuncional_2_62.png" /> 99718,1897<br />\
    <img src="styles/legend/Conectividadfuncional_2_63.png" /> 101326,5476<br />\
    <img src="styles/legend/Conectividadfuncional_2_64.png" /> 102934,9055<br />\
    <img src="styles/legend/Conectividadfuncional_2_65.png" /> 104543,2634<br />\
    <img src="styles/legend/Conectividadfuncional_2_66.png" /> 106151,6213<br />\
    <img src="styles/legend/Conectividadfuncional_2_67.png" /> 107759,9792<br />\
    <img src="styles/legend/Conectividadfuncional_2_68.png" /> 109368,3371<br />\
    <img src="styles/legend/Conectividadfuncional_2_69.png" /> 110976,6950<br />\
    <img src="styles/legend/Conectividadfuncional_2_70.png" /> 112585,0529<br />\
    <img src="styles/legend/Conectividadfuncional_2_71.png" /> 114193,4108<br />\
    <img src="styles/legend/Conectividadfuncional_2_72.png" /> 115801,7687<br />\
    <img src="styles/legend/Conectividadfuncional_2_73.png" /> 117410,1266<br />\
    <img src="styles/legend/Conectividadfuncional_2_74.png" /> 119018,4845<br />\
    <img src="styles/legend/Conectividadfuncional_2_75.png" /> 120626,8424<br />\
    <img src="styles/legend/Conectividadfuncional_2_76.png" /> 122235,2003<br />\
    <img src="styles/legend/Conectividadfuncional_2_77.png" /> 123843,5582<br />\
    <img src="styles/legend/Conectividadfuncional_2_78.png" /> 125451,9161<br />\
    <img src="styles/legend/Conectividadfuncional_2_79.png" /> 127060,2740<br />\
    <img src="styles/legend/Conectividadfuncional_2_80.png" /> 128668,6319<br />\
    <img src="styles/legend/Conectividadfuncional_2_81.png" /> 130276,9898<br />\
    <img src="styles/legend/Conectividadfuncional_2_82.png" /> 131885,3477<br />\
    <img src="styles/legend/Conectividadfuncional_2_83.png" /> 133493,7056<br />\
    <img src="styles/legend/Conectividadfuncional_2_84.png" /> 135102,0635<br />\
    <img src="styles/legend/Conectividadfuncional_2_85.png" /> 136710,4214<br />\
    <img src="styles/legend/Conectividadfuncional_2_86.png" /> 138318,7793<br />\
    <img src="styles/legend/Conectividadfuncional_2_87.png" /> 139927,1372<br />\
    <img src="styles/legend/Conectividadfuncional_2_88.png" /> 141535,4951<br />\
    <img src="styles/legend/Conectividadfuncional_2_89.png" /> 143143,8530<br />\
    <img src="styles/legend/Conectividadfuncional_2_90.png" /> 144752,2109<br />\
    <img src="styles/legend/Conectividadfuncional_2_91.png" /> 146360,5688<br />\
    <img src="styles/legend/Conectividadfuncional_2_92.png" /> 147968,9267<br />\
    <img src="styles/legend/Conectividadfuncional_2_93.png" /> 149577,2846<br />\
    <img src="styles/legend/Conectividadfuncional_2_94.png" /> 151185,6425<br />\
    <img src="styles/legend/Conectividadfuncional_2_95.png" /> 152794,0004<br />\
    <img src="styles/legend/Conectividadfuncional_2_96.png" /> 154402,3583<br />\
    <img src="styles/legend/Conectividadfuncional_2_97.png" /> 156010,7162<br />\
    <img src="styles/legend/Conectividadfuncional_2_98.png" /> 157619,0741<br />\
    <img src="styles/legend/Conectividadfuncional_2_99.png" /> 159227,4320<br />\
    <img src="styles/legend/Conectividadfuncional_2_100.png" /> 160835,7899<br />\
    <img src="styles/legend/Conectividadfuncional_2_101.png" /> 162444,1478<br />\
    <img src="styles/legend/Conectividadfuncional_2_102.png" /> 164052,5057<br />\
    <img src="styles/legend/Conectividadfuncional_2_103.png" /> 165660,8636<br />\
    <img src="styles/legend/Conectividadfuncional_2_104.png" /> 167269,2215<br />\
    <img src="styles/legend/Conectividadfuncional_2_105.png" /> 168877,5794<br />\
    <img src="styles/legend/Conectividadfuncional_2_106.png" /> 170485,9373<br />\
    <img src="styles/legend/Conectividadfuncional_2_107.png" /> 172094,2952<br />\
    <img src="styles/legend/Conectividadfuncional_2_108.png" /> 173702,6531<br />\
    <img src="styles/legend/Conectividadfuncional_2_109.png" /> 175311,0109<br />\
    <img src="styles/legend/Conectividadfuncional_2_110.png" /> 176919,3688<br />\
    <img src="styles/legend/Conectividadfuncional_2_111.png" /> 178527,7267<br />\
    <img src="styles/legend/Conectividadfuncional_2_112.png" /> 180136,0846<br />\
    <img src="styles/legend/Conectividadfuncional_2_113.png" /> 181744,4425<br />\
    <img src="styles/legend/Conectividadfuncional_2_114.png" /> 183352,8004<br />\
    <img src="styles/legend/Conectividadfuncional_2_115.png" /> 184961,1583<br />\
    <img src="styles/legend/Conectividadfuncional_2_116.png" /> 186569,5162<br />\
    <img src="styles/legend/Conectividadfuncional_2_117.png" /> 188177,8741<br />\
    <img src="styles/legend/Conectividadfuncional_2_118.png" /> 189786,2320<br />\
    <img src="styles/legend/Conectividadfuncional_2_119.png" /> 191394,5899<br />\
    <img src="styles/legend/Conectividadfuncional_2_120.png" /> 193002,9478<br />\
    <img src="styles/legend/Conectividadfuncional_2_121.png" /> 194611,3057<br />\
    <img src="styles/legend/Conectividadfuncional_2_122.png" /> 196219,6636<br />\
    <img src="styles/legend/Conectividadfuncional_2_123.png" /> 197828,0215<br />\
    <img src="styles/legend/Conectividadfuncional_2_124.png" /> 199436,3794<br />\
    <img src="styles/legend/Conectividadfuncional_2_125.png" /> 201044,7373<br />\
    <img src="styles/legend/Conectividadfuncional_2_126.png" /> 202653,0952<br />\
    <img src="styles/legend/Conectividadfuncional_2_127.png" /> 204261,4531<br />\
    <img src="styles/legend/Conectividadfuncional_2_128.png" /> 205869,8110<br />\
    <img src="styles/legend/Conectividadfuncional_2_129.png" /> 207478,1689<br />\
    <img src="styles/legend/Conectividadfuncional_2_130.png" /> 209086,5268<br />\
    <img src="styles/legend/Conectividadfuncional_2_131.png" /> 210694,8847<br />\
    <img src="styles/legend/Conectividadfuncional_2_132.png" /> 212303,2426<br />\
    <img src="styles/legend/Conectividadfuncional_2_133.png" /> 213911,6005<br />\
    <img src="styles/legend/Conectividadfuncional_2_134.png" /> 215519,9584<br />\
    <img src="styles/legend/Conectividadfuncional_2_135.png" /> 217128,3163<br />\
    <img src="styles/legend/Conectividadfuncional_2_136.png" /> 218736,6742<br />\
    <img src="styles/legend/Conectividadfuncional_2_137.png" /> 220345,0321<br />\
    <img src="styles/legend/Conectividadfuncional_2_138.png" /> 221953,3900<br />\
    <img src="styles/legend/Conectividadfuncional_2_139.png" /> 223561,7479<br />\
    <img src="styles/legend/Conectividadfuncional_2_140.png" /> 225170,1058<br />\
    <img src="styles/legend/Conectividadfuncional_2_141.png" /> 226778,4637<br />\
    <img src="styles/legend/Conectividadfuncional_2_142.png" /> 228386,8216<br />\
    <img src="styles/legend/Conectividadfuncional_2_143.png" /> 229995,1795<br />\
    <img src="styles/legend/Conectividadfuncional_2_144.png" /> 231603,5374<br />\
    <img src="styles/legend/Conectividadfuncional_2_145.png" /> 233211,8953<br />\
    <img src="styles/legend/Conectividadfuncional_2_146.png" /> 234820,2532<br />\
    <img src="styles/legend/Conectividadfuncional_2_147.png" /> 236428,6111<br />\
    <img src="styles/legend/Conectividadfuncional_2_148.png" /> 238036,9690<br />\
    <img src="styles/legend/Conectividadfuncional_2_149.png" /> 239645,3269<br />\
    <img src="styles/legend/Conectividadfuncional_2_150.png" /> 241253,6848<br />\
    <img src="styles/legend/Conectividadfuncional_2_151.png" /> 242862,0427<br />\
    <img src="styles/legend/Conectividadfuncional_2_152.png" /> 244470,4006<br />\
    <img src="styles/legend/Conectividadfuncional_2_153.png" /> 246078,7585<br />\
    <img src="styles/legend/Conectividadfuncional_2_154.png" /> 247687,1164<br />\
    <img src="styles/legend/Conectividadfuncional_2_155.png" /> 249295,4743<br />\
    <img src="styles/legend/Conectividadfuncional_2_156.png" /> 250903,8322<br />\
    <img src="styles/legend/Conectividadfuncional_2_157.png" /> 252512,1901<br />\
    <img src="styles/legend/Conectividadfuncional_2_158.png" /> 254120,5480<br />\
    <img src="styles/legend/Conectividadfuncional_2_159.png" /> 255728,9059<br />\
    <img src="styles/legend/Conectividadfuncional_2_160.png" /> 257337,2638<br />\
    <img src="styles/legend/Conectividadfuncional_2_161.png" /> 258945,6217<br />\
    <img src="styles/legend/Conectividadfuncional_2_162.png" /> 260553,9796<br />\
    <img src="styles/legend/Conectividadfuncional_2_163.png" /> 262162,3375<br />\
    <img src="styles/legend/Conectividadfuncional_2_164.png" /> 263770,6954<br />\
    <img src="styles/legend/Conectividadfuncional_2_165.png" /> 265379,0533<br />\
    <img src="styles/legend/Conectividadfuncional_2_166.png" /> 266987,4112<br />\
    <img src="styles/legend/Conectividadfuncional_2_167.png" /> 268595,7691<br />\
    <img src="styles/legend/Conectividadfuncional_2_168.png" /> 270204,1270<br />\
    <img src="styles/legend/Conectividadfuncional_2_169.png" /> 271812,4849<br />\
    <img src="styles/legend/Conectividadfuncional_2_170.png" /> 273420,8428<br />\
    <img src="styles/legend/Conectividadfuncional_2_171.png" /> 275029,2007<br />\
    <img src="styles/legend/Conectividadfuncional_2_172.png" /> 276637,5586<br />\
    <img src="styles/legend/Conectividadfuncional_2_173.png" /> 278245,9165<br />\
    <img src="styles/legend/Conectividadfuncional_2_174.png" /> 279854,2744<br />\
    <img src="styles/legend/Conectividadfuncional_2_175.png" /> 281462,6323<br />\
    <img src="styles/legend/Conectividadfuncional_2_176.png" /> 283070,9902<br />\
    <img src="styles/legend/Conectividadfuncional_2_177.png" /> 284679,3481<br />\
    <img src="styles/legend/Conectividadfuncional_2_178.png" /> 286287,7060<br />\
    <img src="styles/legend/Conectividadfuncional_2_179.png" /> 287896,0639<br />\
    <img src="styles/legend/Conectividadfuncional_2_180.png" /> 289504,4218<br />\
    <img src="styles/legend/Conectividadfuncional_2_181.png" /> 291112,7797<br />\
    <img src="styles/legend/Conectividadfuncional_2_182.png" /> 292721,1375<br />\
    <img src="styles/legend/Conectividadfuncional_2_183.png" /> 294329,4954<br />\
    <img src="styles/legend/Conectividadfuncional_2_184.png" /> 295937,8533<br />\
    <img src="styles/legend/Conectividadfuncional_2_185.png" /> 297546,2112<br />\
    <img src="styles/legend/Conectividadfuncional_2_186.png" /> 299154,5691<br />\
    <img src="styles/legend/Conectividadfuncional_2_187.png" /> 300762,9270<br />\
    <img src="styles/legend/Conectividadfuncional_2_188.png" /> 302371,2849<br />\
    <img src="styles/legend/Conectividadfuncional_2_189.png" /> 303979,6428<br />\
    <img src="styles/legend/Conectividadfuncional_2_190.png" /> 305588,0007<br />\
    <img src="styles/legend/Conectividadfuncional_2_191.png" /> 307196,3586<br />\
    <img src="styles/legend/Conectividadfuncional_2_192.png" /> 308804,7165<br />\
    <img src="styles/legend/Conectividadfuncional_2_193.png" /> 310413,0744<br />\
    <img src="styles/legend/Conectividadfuncional_2_194.png" /> 312021,4323<br />\
    <img src="styles/legend/Conectividadfuncional_2_195.png" /> 313629,7902<br />\
    <img src="styles/legend/Conectividadfuncional_2_196.png" /> 315238,1481<br />\
    <img src="styles/legend/Conectividadfuncional_2_197.png" /> 316846,5060<br />\
    <img src="styles/legend/Conectividadfuncional_2_198.png" /> 318454,8639<br />\
    <img src="styles/legend/Conectividadfuncional_2_199.png" /> 320063,2218<br />\
    <img src="styles/legend/Conectividadfuncional_2_200.png" /> 321671,5797<br />\
    <img src="styles/legend/Conectividadfuncional_2_201.png" /> 323279,9376<br />\
    <img src="styles/legend/Conectividadfuncional_2_202.png" /> 324888,2955<br />\
    <img src="styles/legend/Conectividadfuncional_2_203.png" /> 326496,6534<br />\
    <img src="styles/legend/Conectividadfuncional_2_204.png" /> 328105,0113<br />\
    <img src="styles/legend/Conectividadfuncional_2_205.png" /> 329713,3692<br />\
    <img src="styles/legend/Conectividadfuncional_2_206.png" /> 331321,7271<br />\
    <img src="styles/legend/Conectividadfuncional_2_207.png" /> 332930,0850<br />\
    <img src="styles/legend/Conectividadfuncional_2_208.png" /> 334538,4429<br />\
    <img src="styles/legend/Conectividadfuncional_2_209.png" /> 336146,8008<br />\
    <img src="styles/legend/Conectividadfuncional_2_210.png" /> 337755,1587<br />\
    <img src="styles/legend/Conectividadfuncional_2_211.png" /> 339363,5166<br />\
    <img src="styles/legend/Conectividadfuncional_2_212.png" /> 340971,8745<br />\
    <img src="styles/legend/Conectividadfuncional_2_213.png" /> 342580,2324<br />\
    <img src="styles/legend/Conectividadfuncional_2_214.png" /> 344188,5903<br />\
    <img src="styles/legend/Conectividadfuncional_2_215.png" /> 345796,9482<br />\
    <img src="styles/legend/Conectividadfuncional_2_216.png" /> 347405,3061<br />\
    <img src="styles/legend/Conectividadfuncional_2_217.png" /> 349013,6640<br />\
    <img src="styles/legend/Conectividadfuncional_2_218.png" /> 350622,0219<br />\
    <img src="styles/legend/Conectividadfuncional_2_219.png" /> 352230,3798<br />\
    <img src="styles/legend/Conectividadfuncional_2_220.png" /> 353838,7377<br />\
    <img src="styles/legend/Conectividadfuncional_2_221.png" /> 355447,0956<br />\
    <img src="styles/legend/Conectividadfuncional_2_222.png" /> 357055,4535<br />\
    <img src="styles/legend/Conectividadfuncional_2_223.png" /> 358663,8114<br />\
    <img src="styles/legend/Conectividadfuncional_2_224.png" /> 360272,1693<br />\
    <img src="styles/legend/Conectividadfuncional_2_225.png" /> 361880,5272<br />\
    <img src="styles/legend/Conectividadfuncional_2_226.png" /> 363488,8851<br />\
    <img src="styles/legend/Conectividadfuncional_2_227.png" /> 365097,2430<br />\
    <img src="styles/legend/Conectividadfuncional_2_228.png" /> 366705,6009<br />\
    <img src="styles/legend/Conectividadfuncional_2_229.png" /> 368313,9588<br />\
    <img src="styles/legend/Conectividadfuncional_2_230.png" /> 369922,3167<br />\
    <img src="styles/legend/Conectividadfuncional_2_231.png" /> 371530,6746<br />\
    <img src="styles/legend/Conectividadfuncional_2_232.png" /> 373139,0325<br />\
    <img src="styles/legend/Conectividadfuncional_2_233.png" /> 374747,3904<br />\
    <img src="styles/legend/Conectividadfuncional_2_234.png" /> 376355,7483<br />\
    <img src="styles/legend/Conectividadfuncional_2_235.png" /> 377964,1062<br />\
    <img src="styles/legend/Conectividadfuncional_2_236.png" /> 379572,4641<br />\
    <img src="styles/legend/Conectividadfuncional_2_237.png" /> 381180,8220<br />\
    <img src="styles/legend/Conectividadfuncional_2_238.png" /> 382789,1799<br />\
    <img src="styles/legend/Conectividadfuncional_2_239.png" /> 384397,5378<br />\
    <img src="styles/legend/Conectividadfuncional_2_240.png" /> 386005,8957<br />\
    <img src="styles/legend/Conectividadfuncional_2_241.png" /> 387614,2536<br />\
    <img src="styles/legend/Conectividadfuncional_2_242.png" /> 389222,6115<br />\
    <img src="styles/legend/Conectividadfuncional_2_243.png" /> 390830,9694<br />\
    <img src="styles/legend/Conectividadfuncional_2_244.png" /> 392439,3273<br />\
    <img src="styles/legend/Conectividadfuncional_2_245.png" /> 394047,6852<br />\
    <img src="styles/legend/Conectividadfuncional_2_246.png" /> 395656,0431<br />\
    <img src="styles/legend/Conectividadfuncional_2_247.png" /> 397264,4010<br />\
    <img src="styles/legend/Conectividadfuncional_2_248.png" /> 398872,7589<br />\
    <img src="styles/legend/Conectividadfuncional_2_249.png" /> 400481,1168<br />\
    <img src="styles/legend/Conectividadfuncional_2_250.png" /> 402089,4747<br />\
    <img src="styles/legend/Conectividadfuncional_2_251.png" /> 403697,8326<br />\
    <img src="styles/legend/Conectividadfuncional_2_252.png" /> 405306,1905<br />\
    <img src="styles/legend/Conectividadfuncional_2_253.png" /> 406914,5484<br />\
    <img src="styles/legend/Conectividadfuncional_2_254.png" /> 408522,9063<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Conectividadfuncional_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8835150.044137, -32399.681677, -8712354.688316, 101097.105711]
        })
    });
var lyr_Resistenciadelpaisaje_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Resistencia del paisaje<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_0.png" /> 1,0000<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_1.png" /> 2,2008<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_2.png" /> 3,4016<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_3.png" /> 4,6024<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_4.png" /> 5,8031<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_5.png" /> 7,0039<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_6.png" /> 8,2047<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_7.png" /> 9,4055<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_8.png" /> 10,6063<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_9.png" /> 11,8071<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_10.png" /> 13,0079<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_11.png" /> 14,2087<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_12.png" /> 15,4094<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_13.png" /> 16,6102<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_14.png" /> 17,8110<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_15.png" /> 19,0118<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_16.png" /> 20,2126<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_17.png" /> 21,4134<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_18.png" /> 22,6142<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_19.png" /> 23,8150<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_20.png" /> 25,0157<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_21.png" /> 26,2165<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_22.png" /> 27,4173<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_23.png" /> 28,6181<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_24.png" /> 29,8189<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_25.png" /> 31,0197<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_26.png" /> 32,2205<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_27.png" /> 33,4213<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_28.png" /> 34,6220<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_29.png" /> 35,8228<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_30.png" /> 37,0236<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_31.png" /> 38,2244<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_32.png" /> 39,4252<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_33.png" /> 40,6260<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_34.png" /> 41,8268<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_35.png" /> 43,0276<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_36.png" /> 44,2283<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_37.png" /> 45,4291<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_38.png" /> 46,6299<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_39.png" /> 47,8307<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_40.png" /> 49,0315<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_41.png" /> 50,2323<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_42.png" /> 51,4331<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_43.png" /> 52,6339<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_44.png" /> 53,8346<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_45.png" /> 55,0354<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_46.png" /> 56,2362<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_47.png" /> 57,4370<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_48.png" /> 58,6378<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_49.png" /> 59,8386<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_50.png" /> 61,0394<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_51.png" /> 62,2402<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_52.png" /> 63,4409<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_53.png" /> 64,6417<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_54.png" /> 65,8425<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_55.png" /> 67,0433<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_56.png" /> 68,2441<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_57.png" /> 69,4449<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_58.png" /> 70,6457<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_59.png" /> 71,8465<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_60.png" /> 73,0472<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_61.png" /> 74,2480<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_62.png" /> 75,4488<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_63.png" /> 76,6496<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_64.png" /> 77,8504<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_65.png" /> 79,0512<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_66.png" /> 80,2520<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_67.png" /> 81,4528<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_68.png" /> 82,6535<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_69.png" /> 83,8543<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_70.png" /> 85,0551<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_71.png" /> 86,2559<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_72.png" /> 87,4567<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_73.png" /> 88,6575<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_74.png" /> 89,8583<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_75.png" /> 91,0591<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_76.png" /> 92,2598<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_77.png" /> 93,4606<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_78.png" /> 94,6614<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_79.png" /> 95,8622<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_80.png" /> 97,0630<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_81.png" /> 98,2638<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_82.png" /> 99,4646<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_83.png" /> 100,6654<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_84.png" /> 101,8661<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_85.png" /> 103,0669<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_86.png" /> 104,2677<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_87.png" /> 105,4685<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_88.png" /> 106,6693<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_89.png" /> 107,8701<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_90.png" /> 109,0709<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_91.png" /> 110,2717<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_92.png" /> 111,4724<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_93.png" /> 112,6732<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_94.png" /> 113,8740<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_95.png" /> 115,0748<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_96.png" /> 116,2756<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_97.png" /> 117,4764<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_98.png" /> 118,6772<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_99.png" /> 119,8780<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_100.png" /> 121,0787<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_101.png" /> 122,2795<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_102.png" /> 123,4803<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_103.png" /> 124,6811<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_104.png" /> 125,8819<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_105.png" /> 127,0827<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_106.png" /> 128,2835<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_107.png" /> 129,4843<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_108.png" /> 130,6850<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_109.png" /> 131,8858<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_110.png" /> 133,0866<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_111.png" /> 134,2874<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_112.png" /> 135,4882<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_113.png" /> 136,6890<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_114.png" /> 137,8898<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_115.png" /> 139,0906<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_116.png" /> 140,2913<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_117.png" /> 141,4921<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_118.png" /> 142,6929<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_119.png" /> 143,8937<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_120.png" /> 145,0945<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_121.png" /> 146,2953<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_122.png" /> 147,4961<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_123.png" /> 148,6969<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_124.png" /> 149,8976<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_125.png" /> 151,0984<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_126.png" /> 152,2992<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_127.png" /> 153,5000<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_128.png" /> 154,7008<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_129.png" /> 155,9016<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_130.png" /> 157,1024<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_131.png" /> 158,3031<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_132.png" /> 159,5039<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_133.png" /> 160,7047<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_134.png" /> 161,9055<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_135.png" /> 163,1063<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_136.png" /> 164,3071<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_137.png" /> 165,5079<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_138.png" /> 166,7087<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_139.png" /> 167,9094<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_140.png" /> 169,1102<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_141.png" /> 170,3110<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_142.png" /> 171,5118<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_143.png" /> 172,7126<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_144.png" /> 173,9134<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_145.png" /> 175,1142<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_146.png" /> 176,3150<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_147.png" /> 177,5157<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_148.png" /> 178,7165<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_149.png" /> 179,9173<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_150.png" /> 181,1181<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_151.png" /> 182,3189<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_152.png" /> 183,5197<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_153.png" /> 184,7205<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_154.png" /> 185,9213<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_155.png" /> 187,1220<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_156.png" /> 188,3228<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_157.png" /> 189,5236<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_158.png" /> 190,7244<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_159.png" /> 191,9252<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_160.png" /> 193,1260<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_161.png" /> 194,3268<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_162.png" /> 195,5276<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_163.png" /> 196,7283<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_164.png" /> 197,9291<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_165.png" /> 199,1299<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_166.png" /> 200,3307<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_167.png" /> 201,5315<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_168.png" /> 202,7323<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_169.png" /> 203,9331<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_170.png" /> 205,1339<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_171.png" /> 206,3346<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_172.png" /> 207,5354<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_173.png" /> 208,7362<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_174.png" /> 209,9370<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_175.png" /> 211,1378<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_176.png" /> 212,3386<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_177.png" /> 213,5394<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_178.png" /> 214,7402<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_179.png" /> 215,9409<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_180.png" /> 217,1417<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_181.png" /> 218,3425<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_182.png" /> 219,5433<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_183.png" /> 220,7441<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_184.png" /> 221,9449<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_185.png" /> 223,1457<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_186.png" /> 224,3465<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_187.png" /> 225,5472<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_188.png" /> 226,7480<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_189.png" /> 227,9488<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_190.png" /> 229,1496<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_191.png" /> 230,3504<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_192.png" /> 231,5512<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_193.png" /> 232,7520<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_194.png" /> 233,9528<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_195.png" /> 235,1535<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_196.png" /> 236,3543<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_197.png" /> 237,5551<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_198.png" /> 238,7559<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_199.png" /> 239,9567<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_200.png" /> 241,1575<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_201.png" /> 242,3583<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_202.png" /> 243,5591<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_203.png" /> 244,7598<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_204.png" /> 245,9606<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_205.png" /> 247,1614<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_206.png" /> 248,3622<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_207.png" /> 249,5630<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_208.png" /> 250,7638<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_209.png" /> 251,9646<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_210.png" /> 253,1654<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_211.png" /> 254,3661<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_212.png" /> 255,5669<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_213.png" /> 256,7677<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_214.png" /> 257,9685<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_215.png" /> 259,1693<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_216.png" /> 260,3701<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_217.png" /> 261,5709<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_218.png" /> 262,7717<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_219.png" /> 263,9724<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_220.png" /> 265,1732<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_221.png" /> 266,3740<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_222.png" /> 267,5748<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_223.png" /> 268,7756<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_224.png" /> 269,9764<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_225.png" /> 271,1772<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_226.png" /> 272,3780<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_227.png" /> 273,5787<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_228.png" /> 274,7795<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_229.png" /> 275,9803<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_230.png" /> 277,1811<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_231.png" /> 278,3819<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_232.png" /> 279,5827<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_233.png" /> 280,7835<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_234.png" /> 281,9843<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_235.png" /> 283,1850<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_236.png" /> 284,3858<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_237.png" /> 285,5866<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_238.png" /> 286,7874<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_239.png" /> 287,9882<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_240.png" /> 289,1890<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_241.png" /> 290,3898<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_242.png" /> 291,5906<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_243.png" /> 292,7913<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_244.png" /> 293,9921<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_245.png" /> 295,1929<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_246.png" /> 296,3937<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_247.png" /> 297,5945<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_248.png" /> 298,7953<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_249.png" /> 299,9961<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_250.png" /> 301,1969<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_251.png" /> 302,3976<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_252.png" /> 303,5984<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_253.png" /> 304,7992<br />\
    <img src="styles/legend/Resistenciadelpaisaje_3_254.png" /> 306,0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Resistenciadelpaisaje_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8835150.044137, -32399.681677, -8712354.688316, 101097.105711]
        })
    });
var format_Zonaspriorizacion_4 = new ol.format.GeoJSON();
var features_Zonaspriorizacion_4 = format_Zonaspriorizacion_4.readFeatures(json_Zonaspriorizacion_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonaspriorizacion_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonaspriorizacion_4.addFeatures(features_Zonaspriorizacion_4);
var lyr_Zonaspriorizacion_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonaspriorizacion_4, 
                style: style_Zonaspriorizacion_4,
                popuplayertitle: 'Zonas priorizacion',
                interactive: true,
    title: 'Zonas priorizacion<br />\
    <img src="styles/legend/Zonaspriorizacion_4_0.png" /> Baja<br />\
    <img src="styles/legend/Zonaspriorizacion_4_1.png" /> Maxima<br />\
    <img src="styles/legend/Zonaspriorizacion_4_2.png" /> Media<br />\
    <img src="styles/legend/Zonaspriorizacion_4_3.png" /> Media-alta<br />\
    <img src="styles/legend/Zonaspriorizacion_4_4.png" /> Sin intervención<br />' });
var format_Bloquespatrullajesmanejo_5 = new ol.format.GeoJSON();
var features_Bloquespatrullajesmanejo_5 = format_Bloquespatrullajesmanejo_5.readFeatures(json_Bloquespatrullajesmanejo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bloquespatrullajesmanejo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bloquespatrullajesmanejo_5.addFeatures(features_Bloquespatrullajesmanejo_5);
var lyr_Bloquespatrullajesmanejo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bloquespatrullajesmanejo_5, 
                style: style_Bloquespatrullajesmanejo_5,
                popuplayertitle: 'Bloques patrullajes manejo',
                interactive: true,
    title: 'Bloques patrullajes manejo<br />\
    <img src="styles/legend/Bloquespatrullajesmanejo_5_0.png" /> Alta<br />\
    <img src="styles/legend/Bloquespatrullajesmanejo_5_1.png" /> Baja<br />\
    <img src="styles/legend/Bloquespatrullajesmanejo_5_2.png" /> Media<br />' });
var format_iconos_6 = new ol.format.GeoJSON();
var features_iconos_6 = format_iconos_6.readFeatures(json_iconos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_iconos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_iconos_6.addFeatures(features_iconos_6);
var lyr_iconos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_iconos_6, 
                style: style_iconos_6,
                popuplayertitle: 'iconos',
                interactive: true,
    title: 'iconos<br />\
    <img src="styles/legend/iconos_6_0.png" /> Contención de fragmentación<br />\
    <img src="styles/legend/iconos_6_1.png" /> Expansión<br />\
    <img src="styles/legend/iconos_6_2.png" /> Patrullajes<br />' });

lyr_OpenTopoMap_0.setVisible(true);lyr_Conectividadestructural_1.setVisible(true);lyr_Conectividadfuncional_2.setVisible(true);lyr_Resistenciadelpaisaje_3.setVisible(true);lyr_Zonaspriorizacion_4.setVisible(true);lyr_Bloquespatrullajesmanejo_5.setVisible(true);lyr_iconos_6.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_Conectividadestructural_1,lyr_Conectividadfuncional_2,lyr_Resistenciadelpaisaje_3,lyr_Zonaspriorizacion_4,lyr_Bloquespatrullajesmanejo_5,lyr_iconos_6];
lyr_Conectividadestructural_1.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'area_ha': 'area_ha', 'Bloques': 'Bloques', });
lyr_Zonaspriorizacion_4.set('fieldAliases', {'id': 'id', 'Prioridad': 'Prioridad', 'Zona': 'Zona', });
lyr_Bloquespatrullajesmanejo_5.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Bloque': 'Bloque', 'Bloque2': 'Bloque2', 'Priorizaci': 'Priorizaci', });
lyr_iconos_6.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Conectividadestructural_1.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'area_ha': 'TextEdit', 'Bloques': 'TextEdit', });
lyr_Zonaspriorizacion_4.set('fieldImages', {'id': 'TextEdit', 'Prioridad': 'TextEdit', 'Zona': 'TextEdit', });
lyr_Bloquespatrullajesmanejo_5.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Bloque': 'TextEdit', 'Bloque2': 'TextEdit', 'Priorizaci': 'TextEdit', });
lyr_iconos_6.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', });
lyr_Conectividadestructural_1.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'area_ha': 'no label', 'Bloques': 'no label', });
lyr_Zonaspriorizacion_4.set('fieldLabels', {'id': 'no label', 'Prioridad': 'no label', 'Zona': 'no label', });
lyr_Bloquespatrullajesmanejo_5.set('fieldLabels', {'Id': 'no label', 'Nombre': 'no label', 'Bloque': 'no label', 'Bloque2': 'no label', 'Priorizaci': 'no label', });
lyr_iconos_6.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_iconos_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});