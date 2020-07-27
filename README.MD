<!-- This is the original graph without enconding it
digraph D {

      node [shape=plaintext fontname="Open Sans", color="#46c1a4", fontcolor="#0C436D"];

      data_gathering [ label=<
       <table border="1" cellborder="0" cellspacing="1">
         <tr><td><b>1. Data gathering</b></td></tr>
         <tr><td>Gathering raw data from different sources (websites, flat files, calls to databases)</td></tr>
         <tr><td><font color="#46c1a4">Store raw data</font></td></tr>
       </table>>];


      data_preprocessing [ label=<
       <table border="1" cellborder="0" cellspacing="1">
         <tr><td><b>2. Data pre-processing</b></td></tr>
         <tr><td>2.1 Data extraction: select columns and dates</td></tr>
         <tr><td>2.2 Data formatting: check/reformat columns types, unify location names, calculations if needed</td></tr>
         <tr><td><font color="#46c1a4">Store pre-processed data</font></td></tr>
       </table>>];

      dataset_creation [ label=<
       <table border="1" cellborder="0" cellspacing="1">
         <tr><td><b>3. Dataset creation</b></td></tr>
         <tr><td>3.1 Map locations with sources: </td></tr>
         <tr><td>remove locations from non desired sources and check expected ones </td></tr>
         <tr><td>3.2 Combine dataframes </td></tr>
         <tr><td>3.3 Create parquet file </td></tr>
         <tr><td><font color="#46c1a4">Store final dataset (parquet)</font></td></tr>
       </table>>];

      validation[ label=<
       <table border="1" cellborder="0" cellspacing="1">
         <tr><td><b>4. Validation</b></td></tr>
       </table>>];


      data_gathering        -> data_preprocessing;
      data_preprocessing    -> dataset_creation;
      dataset_creation      -> validation;

}
-->
<!-- After using urlencode and adding it to 'https://g.gravizo.com/svg?' -->
<!-- Remember the closing parentheses -->
![Alt text](https://g.gravizo.com/svg?digraph%20D%20%7B%0A%0A%20%20%20%20%20%20node%20%5Bshape%3Dplaintext%20fontname%3D%22Open%20Sans%22%2C%20color%3D%22%2346c1a4%22%2C%20fontcolor%3D%22%230C436D%22%5D%3B%0A%0A%20%20%20%20%20%20data_gathering%20%5B%20label%3D%3C%0A%20%20%20%20%20%20%20%3Ctable%20border%3D%221%22%20cellborder%3D%220%22%20cellspacing%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%3Ctr%3E%3Ctd%3E%3Cb%3E1.%20Data%20gathering%3C/b%3E%3C/td%3E%3C/tr%3E%0A%20%20%20%20%20%20%20%20%20%3Ctr%3E%3Ctd%3EGathering%20raw%20data%20from%20different%20sources%20%28websites%2C%20flat%20files%2C%20calls%20to%20databases%29%3C/td%3E%3C/tr%3E%0A%20%20%20%20%20%20%20%20%20%3Ctr%3E%3Ctd%3E%3Cfont%20color%3D%22%2346c1a4%22%3EStore%20raw%20data%3C/font%3E%3C/td%3E%3C/tr%3E%0A%20%20%20%20%20%20%20%3C/table%3E%3E%5D%3B%0A%0A%0A%20%20%20%20%20%20data_preprocessing%20%5B%20label%3D%3C%0A%20%20%20%20%20%20%20%3Ctable%20border%3D%221%22%20cellborder%3D%220%22%20cellspacing%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%3Ctr%3E%3Ctd%3E%3Cb%3E2.%20Data%20pre-processing%3C/b%3E%3C/td%3E%3C/tr%3E%0A%20%20%20%20%20%20%20%20%20%3Ctr%3E%3Ctd%3E2.1%20Data%20extraction%3A%20select%20columns%20and%20dates%3C/td%3E%3C/tr%3E%0A%20%20%20%20%20%20%20%20%20%3Ctr%3E%3Ctd%3E2.2%20Data%20formatting%3A%20check/reformat%20columns%20types%2C%20unify%20location%20names%2C%20calculations%20if%20needed%3C/td%3E%3C/tr%3E%0A%20%20%20%20%20%20%20%20%20%3Ctr%3E%3Ctd%3E%3Cfont%20color%3D%22%2346c1a4%22%3EStore%20pre-processed%20data%3C/font%3E%3C/td%3E%3C/tr%3E%0A%20%20%20%20%20%20%20%3C/table%3E%3E%5D%3B%0A%0A%20%20%20%20%20%20dataset_creation%20%5B%20label%3D%3C%0A%20%20%20%20%20%20%20%3Ctable%20border%3D%221%22%20cellborder%3D%220%22%20cellspacing%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%3Ctr%3E%3Ctd%3E%3Cb%3E3.%20Dataset%20creation%3C/b%3E%3C/td%3E%3C/tr%3E%0A%20%20%20%20%20%20%20%20%20%3Ctr%3E%3Ctd%3E3.1%20Map%20locations%20with%20sources%3A%20%3C/td%3E%3C/tr%3E%0A%20%20%20%20%20%20%20%20%20%3Ctr%3E%3Ctd%3Eremove%20locations%20from%20non%20desired%20sources%20and%20check%20expected%20ones%20%3C/td%3E%3C/tr%3E%0A%20%20%20%20%20%20%20%20%20%3Ctr%3E%3Ctd%3E3.2%20Combine%20dataframes%20%3C/td%3E%3C/tr%3E%0A%20%20%20%20%20%20%20%20%20%3Ctr%3E%3Ctd%3E3.3%20Create%20parquet%20file%20%3C/td%3E%3C/tr%3E%0A%20%20%20%20%20%20%20%20%20%3Ctr%3E%3Ctd%3E%3Cfont%20color%3D%22%2346c1a4%22%3EStore%20final%20dataset%20%28parquet%29%3C/font%3E%3C/td%3E%3C/tr%3E%0A%20%20%20%20%20%20%20%3C/table%3E%3E%5D%3B%0A%0A%20%20%20%20%20%20validation%5B%20label%3D%3C%0A%20%20%20%20%20%20%20%3Ctable%20border%3D%221%22%20cellborder%3D%220%22%20cellspacing%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%3Ctr%3E%3Ctd%3E%3Cb%3E4.%20Validation%3C/b%3E%3C/td%3E%3C/tr%3E%0A%20%20%20%20%20%20%20%3C/table%3E%3E%5D%3B%0A%0A%0A%20%20%20%20%20%20data_gathering%20%20%20%20%20%20%20%20-%3E%20data_preprocessing%3B%0A%20%20%20%20%20%20data_preprocessing%20%20%20%20-%3E%20dataset_creation%3B%0A%20%20%20%20%20%20dataset_creation%20%20%20%20%20%20-%3E%20validation%3B%0A%0A%20%20%20%20%7D)
