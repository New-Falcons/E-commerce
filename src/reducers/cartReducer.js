const productsFromLocalStorage = JSON.parse(
  localStorage.getItem("productsInCart") || "[]"
);
console.log(productsFromLocalStorage);
var totalPriceFromLocalStorage = 0;
for (let i = 0; i < productsFromLocalStorage.length; i++) {
  totalPriceFromLocalStorage +=
    parseInt(productsFromLocalStorage[i].price) * productsFromLocalStorage[i].quantity;
}

var totalQuantityFromLocalStorage = 0;
for (let i = 0; i < productsFromLocalStorage.length; i++) {
  totalQuantityFromLocalStorage += productsFromLocalStorage[i].quantity;
}


const initialState = {
  products: [
    [
      {
        id: "1",
        title: "U.S. Polo",
        price: "1104",
        description: "Men Navy Blue Printed Polo Collar T-shirt",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13525298/2021/2/10/85dec922-7c4f-4ce2-a549-19ee98cd77571612951281341-US-Polo-Assn-Denim-Co-Men-Tshirts-9811612951279544-1.jpg",
      },
      {
        id: "2",
        title: "Tommy Hilfiger",
        price: "2799",
        description: "Men Maroon Pullover Sweater",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14513772/2021/7/13/fbb6b69c-234f-4796-8d07-a219c086601f1626171631754-Tommy-Hilfiger-Men-Sweaters-4551626171631372-1.jpg",
      },
      {
        id: "3",
        title: "Levis",
        price: "1199",
        description: "Men Olive Green Printed Polo Collar T-shirt",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13298308/2021/5/10/721d2b7c-e195-43b9-aa60-64514e6666fa1620630598158-Levis-Men-Black-Printed-Polo-Collar-T-shirt-9971620630597219-1.jpg",
      },
      {
        id: "4",
        title: "Nike",
        price: "2195",
        description: "Men Navy Blue Printed Polo Collar T-shirt",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14805330/2021/7/27/7d24e479-c32c-42f3-ae61-a27b885c90451627386211682-Chicago-Bulls-Courtside-Statement-Mens-Jordan-NBA-T-Shirt-93-1.jpg",
      },
      {
        id: "5",
        title: "Puma",
        price: "749",
        description:
          "Men Black & Yellow Printed Round Neck Sneaker Inspired T-shirt",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13502850/2021/3/3/44430019-4ade-4265-95a0-4b57c505fd841614775926750-Puma-Men-Tshirts-5311614775925382-1.jpg",
      },
      {
        id: "6",
        title: "United Colors of Benetton",
        price: "1349",
        description: "Men Navy Blue & Brown Slim Fit Checked Casual Shirt",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11635696/2020/10/7/bb986aaa-253b-4f5e-aedd-7a4d719d64341602052073968ShirtsUnitedColorsofBenettonMen1.jpg",
      },
      {
        id: "7",
        title: "U.S. Polo Assn.",
        price: "669",
        description: "Men White & Blue Printed Thong Flip-Flops",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/3/2/c0a0b943-980f-41e9-95ca-a44eb58021b81614678988542-1.jpg",
      },
      {
        id: "8",
        title: "Levis",
        price: "1349",
        description: "Men Navy Blue Brand Logo Print Slim Fit Joggers",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14334768/2021/6/15/acc52432-c491-4b74-94b2-8e3722f9a9c21623736049296JeansLevisMenTrousersLevisMenTrousersLevisMenTrousersLevisMe2.jpg",
      },
      {
        id: "9",
        title: "Nike",
        price: "4995",
        description: "Men White Red Typography Active Sporty Jacket",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14643398/2021/7/14/2d9f3f01-4c9c-4b62-804d-e9345859e5621626265478546-Paris-Saint-Germain-Mens-Anthem-20-Jacket-2121626265477867-1.jpg",
      },
      {
        id: "10",
        title: "Jack & Jones",
        price: "1649",
        description:
          "Men White & Blue Slim Fit Printed Smart Casual Sustainable Shirt",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13254512/2021/2/18/5f649647-5600-49a7-830c-ed084c8705401613649320910-Jack--Jones-Men-Shirts-3261613649318790-1.jpg",
      },
      {
        id: "11",
        title: "Biba",
        price: "1104",
        description: "Pink Ethnic Motifs Embroidered Mirror Work Kurti",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10453156/2021/6/22/98b93a19-6273-4ffc-a069-178b7820e0951624350225428-Biba-Women-Dresses-4081624350224802-1.jpg",
      },
      {
        id: "12",
        title: "Only",
        price: "1119",
        description: "Women Pink Printed A-Line Dress",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8707645/2019/3/19/d60dd902-f42b-4c60-b027-48ba79c72a6f1552996828940-ONLY-Women-Pink-Printed-Fit-and-Flare-Dress-5621552996827532-1.jpg",
      },
      {
        id: "13",
        title: "Levis",
        price: "989",
        description: "Women Pink Brand Logo Embroidered T-shirt",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14420126/2021/7/20/f255b8e3-d989-4e52-98b5-70a706cc54d51626762969183-Levis-Women-Tshirts-181626762968634-1.jpg",
      },
      {
        id: "14",
        title: "Nike",
        price: "1795",
        description:
          "Rust Orange & Black Brand Logo Dri-FIT Icon Clash Tank Top",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14801514/2021/8/16/f8d422c3-2011-44f0-9d6f-a48bc4488eb91629086037595-Nike-Dri-FIT-Icon-Clash-Womens-Graphic-Training-Tank-3571629-1.jpg",
      },
      {
        id: "15",
        title: "Puma",
        price: "1609",
        description:
          "Women Black Solid Iconic T7 MR Side Panel Insert Detailing Leggings",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14928432/2021/8/9/3e408bbf-c605-4c69-8966-9da9277398bb1628494553207-Puma-Women-Track-Pants-9121628494552468-1.jpg",
      },
      {
        id: "16",
        title: "GAP",
        price: "1799",
        description: "Women Magenta Solid Shirt Dress",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/17/57086516-30b1-4735-9038-b3ce54bf0ac11613540555389-1.jpg",
      },
      {
        id: "17",
        title: "GAP",
        price: "1399",
        description: "Women Cream-Coloured Solid Top",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/3/15/279cf0ef-1e47-4b56-9d20-63739006a4bc1584221865715-5.jpg",
      },
      {
        id: "18",
        title: "ONLY",
        price: "1809",
        description: "Women Multicoloured Printed Basic Jumpsuit",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/25/a140f57c-7e87-4ecd-8399-425127c2630f1614251728687-1.jpg",
      },
      {
        id: "19",
        title: "ONLY",
        price: "1569",
        description: "Women Rust Brown & Blue Printed Fit and Flare Dress",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11438276/2020/2/10/395ac7e3-7e13-40cf-9103-7bb77c8dd14d1581314249085-ONLY-Women-Dresses-1291581314247852-1.jpg",
      },
      {
        id: "20",
        title: "W",
        price: "1509",
        description: "Women Rust Brown & Blue Printed Fit and Flare Dress",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13078322/2021/2/8/9e7ecc94-e0f2-4e9d-967a-4882ae0b778d1612764114920-W-Women-Yellow-Embroidered-A-Line-Kurta-2311612764112511-1.jpg",
      },
      {
        id: "21",
        title: "H.M",
        price: "789",
        description: "Girls Blue Super Soft Skinny Fit Jeans",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/7/29/0b2e676c-0d91-4eb2-89ba-5cbf27b311631595973696223-1.jpg",
      },
      {
        id: "22",
        title: "GAP",
        price: "999",
        description: "Boys Grey Printed Hooded Sweatshirt",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10852528/2019/11/19/d5926b0d-233b-4e5a-a8d7-91fb84fc27201574164416136-GAP-Boys-Grey-Printed-Hooded-Sweatshirt-2701574164414729-1.jpg",
      },
      {
        id: "23",
        title: "MANGO Kids",
        price: "1089",
        description:
          "Girls Coral Orange Pure Cotton Conversational Printed Sustainable A-Line Dress",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15038098/2021/8/12/d0b0b341-0d11-4bdc-b8fe-ea72af70eac91628766958958-Mango-Kids-Girls-Dresses-9801628766958539-1.jpg",
      },
      {
        id: "24",
        title: "Chicco",
        price: "1255",
        description: "Infant Girls Pink & White Clothing Set",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11880956/2020/5/26/62a302e2-adf9-4ca6-9ae5-78518654df1e1590470624932Chiccopink5.jpg",
      },
      {
        id: "25",
        title: "Marks and Spenser",
        price: "1709",
        description:
          "Boys Charcoal Grey & Green Crocodile Print Velvet Finish Night suit",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13941218/2021/4/22/0746d6a2-1200-4d44-b26e-7467a5a029711619092374885-Marks--Spencer-Boys-Grey--Green-Crocodile-Print-Velvet-Finis-1.jpg",
      },
      {
        id: "26",
        title: "H.M",
        price: "549",
        description: "Girls Blue Super Soft Skinny Fit Jeans",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13544788/2021/2/5/ef272873-48b1-4dac-b197-956f43e0099f1612501113533-White-and-Blue-dungaree-4681612501111737-1.jpg",
      },
      {
        id: "27",
        title: "GAP",
        price: "999",
        description: "Boys Grey Printed Hooded Sweatshirt",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14529450/2021/8/5/8dbbaa30-fca4-4ac8-a361-88ad2da685b91628151349849-Gini-and-Jony-Boys-Blue-Printed-Sweatshirt-6461628151349446-1.jpg",
      },
      {
        id: "28",
        title: "MANGO Kids",
        price: "1089",
        description:
          "Girls Pure Cotton Conversational Printed Sustainable A-Line Dress",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12838260/2021/1/11/3a69d919-2988-4a2a-a567-1a1a3d816e121610364922408-Gini-and-Jony-Girls-Navy-Blue-Solid-Sequin-Detail-Hooded-Fle-1.jpg",
      },
      {
        id: "29",
        title: "Chicco",
        price: "1255",
        description: "Infant Girls Pink & White Clothing Set",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13856796/2021/4/1/0edf9943-0dab-494b-aa5b-bdce9e7c7e631617254953150-Button-Down-Tencil-Denim-Dress-7571617254952620-1.jpg",
      },
      {
        id: "30",
        title: "Marks and Spenser",
        price: "1709",
        description:
          "Boys Charcoal Grey & Green Crocodile Print Velvet Finish Night suit",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14529554/2021/8/5/72437aea-9d48-49db-9dc0-e69df40c5be51628153732858-Gini-and-Jony-Girls-Blue-Printed-Sweatshirt-5251628153732584-1.jpg",
      },
      {
        id: "31",
        title: "DILLINGER",
        price: "589",
        description: "Men Navy Blue & Red Striped Round Neck T-shirt",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11067734/2019/12/10/34b589c2-80b9-4ad9-81ea-84333fbc46761575972548055-DILLINGER-Men-Tshirts-4071575972546110-1.jpg",
      },
      {
        id: "32",
        title: "HERE&NOW",
        price: "999",
        description: "Men White & Coral Colourblocked Polo Collar T-shirt",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/4318091/2019/5/8/c0e24a77-4369-42ae-98c4-b583e5375dbf1557297643554-HERENOW-Men-White--Coral-Pink-Colourblocked-Polo-Collar-T-sh-1.jpg",
      },
      {
        id: "33",
        title: "WROGN",
        price: "759",
        description: "Men Rust Red High Density Print Round Neck T-shirt",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700830/2019/4/8/3f06fe25-1ce2-4e1e-88e9-7a9d26b4f0bf1554699735416-WROGN-Men-Rust-Red-High-Density-Print-Round-Neck-T-shirt-961-1.jpg",
      },
      {
        id: "34",
        title: "Roadster",
        price: "279",
        description:
          "Men Navy Blue & White Brand Logo Print Applique Cotton T-shirt",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13744718/2021/8/12/7fba3224-7f21-46be-ba87-de69c17b1c8c1628770226717-Roadster-Men-Tshirts-5311628770226136-1.jpg",
      },
      {
        id: "35",
        title: "HRX",
        price: "494",
        description: "Men White Solid Round Neck Athleisure T-shirt",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/6825469/2018/10/17/6a11fe3f-73b0-43ee-8d48-8de1cb502a411539758421051-HRX-by-Hrithik-Roshan-Men-White-Printed-Round-Neck-T-shirt-9-1.jpg",
      },
      {
        id: "36",
        title: "Roadster",
        price: "749",
        description: "Men Black & White Regular Fit Checked Casual Shirt",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8889611/2019/3/20/3eae8fb4-b7ca-4e01-80bf-d1e59ab1568d1553080254589-Roadster-Men-Black--White-Regular-Fit-Checked-Casual-Shirt-9-1.jpg",
      },
      {
        id: "37",
        title: "HERE&NOW",
        price: "1019",
        description: "Men Maroon Regular Fit Solid Casual Shirt",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7288105/2018/10/24/a059288c-512c-468a-87d4-ce36b52840441540360274049-HERENOW-Men-Shirts-5241540360273894-1.jpg",
      },
      {
        id: "38",
        title: "HERE&NOW",
        price: "1025",
        description: "Men White Checked Straight Shirts",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/5556054/2018/6/14/cf00c361-0c7f-444d-80fe-f599c4bade741528960783276-HERENOW-Men-Kurtas-7331528960782000-1.jpg",
      },
      {
        id: "39",
        title: "HIGHLANDER",
        price: "503",
        description: "Men White & Blue Slim Fit Printed Casual Shirt",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11780956/2020/4/3/f724f764-2aae-4918-ba70-6a20335f90451585905028495HIGHLANDERMenWhiteBlueSlimFitPrintedCasualShirt1.jpg",
      },
      {
        id: "40",
        title: "HIGHLANDER",
        price: "555",
        description: "Men Navy Blue & White Slim Fit Printed Casual Shirt",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/10/10/59e1e9ac-ed07-437a-89d9-fa3938c5c96d1570703044459-3.jpg",
      },
      {
        id: "41",
        title: "Wrogn",
        price: "1189",
        description:
          "Men Grey Skinny Fit Mid-Rise Clean Look Stretchable Jeans",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/6832388/2018/9/14/7c81479f-9dcf-4e9b-863b-bdc74d8afa2f1536913047231-WROGN-Men-Grey-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-2401536913047047-1.jpg",
      },
      {
        id: "42",
        title: "Mast & Harbour",
        price: "1099",
        description:
          "Men Blue Skinny Fit Mid-Rise Clean Look Stretchable Cropped Jeans",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12542796/2020/12/7/a3c6d6d2-dc33-4eaf-b6dc-983a8ddacbe21607324198292-Mast--Harbour-Men-Jeans-2551607324195681-1.jpg",
      },
      {
        id: "43",
        title: "HIGHLANDER",
        price: "832",
        description:
          "Men Black Slim Fit Mid-Rise Clean Look Stretchable Cropped Jeans",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2948543/2018/3/30/11522394099790-HIGHLANDER-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-5171522394099590-1.jpg",
      },
      {
        id: "44",
        title: "HERE&NOW",
        price: "1099",
        description:
          "Men Black Tapered Fit Cropped Mid-Rise Slash Knee Stretchable Jeans",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2428491/2018/2/1/11517477484451-HERENOW-Men-Jeans-141517477484325-1.jpg",
      },
      {
        id: "45",
        title: "Roadster",
        price: "594",
        description:
          "Men Navy Blue Skinny Fit Mid-Rise Clean Look Stretchable Jeans",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10092105/2019/10/15/11e8597e-85a5-4dcd-a40a-dc9647e1b89a1571142731707-Roadster-Men-Jeans-5221571142730946-1.jpg",
      },
      {
        id: "46",
        title: "HIGHLANDER",
        price: "386",
        description: "Men Navy Blue Solid Slim Fit Regular Shorts",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/11/28/62ba7314-cd1e-4d59-b00b-b630ff0e5aac1574938324121-1.jpg",
      },
      {
        id: "47",
        title: "Roadster",
        price: "559",
        description: "Men Blue Washed Regular Fit Denim Shorts",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11928052/2020/6/18/0572f71b-65f5-482c-8782-229a33fe33011592489991820AlenaWomensFashionKurtaShortsRoadsterMen1.jpg",
      },
      {
        id: "48",
        title: "HERE&NOW",
        price: "1429",
        description: "Men Blue Slim Fit Solid Chinos",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8890405/2019/4/16/e5e8d11c-afbf-4364-b2c5-6d126c822cb21555395958705-HERENOW-Men-Blue-Slim-Fit-Solid-Chinos-4661555395957531-1.jpg",
      },
      {
        id: "49",
        title: "GANT",
        price: "4499",
        description: "Men Khaki Regular Fit Solid Regular Trousers",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/9/24/e9875480-dfba-4488-beee-eb11441269421600904056089-1.jpg",
      },
      {
        id: "50",
        title: "ARISE",
        price: "584",
        description: "Men Black Solid Regular Fit Shorts",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/5345804/2018/4/24/11524548985202-ARISE-Men-Black-Solid-Regular-Fit-Regular-Shorts-6641524548985008-1.jpg",
      },
      {
        id: "51",
        title: "RED TAPE",
        price: "2189",
        description: "Men Black Air + Walking Shoes",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12849768/2020/11/4/2231be8d-e0b2-43a5-b22d-2adce2d407de1604491192080RedTapeMenBlackWalkingShoes1.jpg",
      },
      {
        id: "52",
        title: "PUMA",
        price: "7499",
        description: "Men Liberate nitro running",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13484194/2021/3/15/eca75c50-08bc-46ad-90be-b052b7f001d61615810330032-Puma-Men-Sports-Shoes-7401615810328233-1.jpg",
      },
      {
        id: "53",
        title: "Nike",
        price: "5995",
        description: "Unisex SB Force 58 Skate Shoes",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14528344/2021/7/26/309c1b18-f8b5-4642-89f5-c483a49cc25e1627301679478-Nike-SB-Force-58-Skate-Shoe-3181627301679160-1.jpg",
      },
      {
        id: "54",
        title: "Ascis",
        price: "4500",
        description: "Men JB Elite IV Shoes",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15053674/2021/8/6/3010e333-05e4-4daa-9659-e85e669f6d411628255693321AsicsHyperSpeedBlackMensSportsShoes1.jpg",
      },
      {
        id: "55",
        title: "ADIDAS",
        price: "4299",
        description: "Men Woven Fluidglow Running Shoes",
        size: "M",
        quantity: 1,
        url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14782094/2021/8/9/17b1f6fc-1ae4-476a-86b4-18e233ee0faa1628509005335-Adidas-Men-Grey-Woven-Design-Fluidglow-M-Running-Shoes-93816-1.jpg",
      },
    ],
  ],
  cartProducts: productsFromLocalStorage,
  totalPrice: totalPriceFromLocalStorage,
  totalQuantities: totalQuantityFromLocalStorage,
};

const cartReducer = (state = initialState, action) => {
  let findPro;
  let index;
  switch (action.type) {
    case "ADD_TO_CART":
      const { product, quantity } = action.payload;
      const check = state.cartProducts.find((pr) => pr.id === product.id);
      if (check) {
        return state;
      } else {
        const Tprice = state.totalPrice + parseInt(product.price) * quantity;
        const Tquantities = state.totalQuantities + quantity;
        product.quantity = quantity;
        return {
          ...state,
          cartProducts: [...state.cartProducts, product],
          totalPrice: Tprice,
          totalQuantities: Tquantities,
        };
      }
    case "INC":
      findPro = state.cartProducts.find(
        (product) => product.id === action.payload
      );
      index = state.cartProducts.findIndex(
        (product) => product.id === action.payload
      );
      findPro.quantity += 1;
      state.cartProducts[index] = findPro;
      return {
        ...state,
        totalPrice: state.totalPrice + parseInt(findPro.price),
        totalQuantities: state.totalQuantities + 1,
      };
    case "DEC":
      findPro = state.cartProducts.find(
        (product) => product.id === action.payload
      );
      index = state.cartProducts.findIndex(
        (product) => product.id === action.payload
      );
      if (findPro.quantity > 1) {
        findPro.quantity -= 1;
        state.cartProducts[index] = findPro;
        return {
          ...state,
          totalPrice: state.totalPrice - parseInt(findPro.price),
          totalQuantities: state.totalQuantities - 1,
        };
      } else {
        return state;
      }
    case "REMOVE":
      findPro = state.cartProducts.find(
        (product) => product.id === action.payload
      );
      const filtered = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        cartProducts: filtered,
        totalPrice:
          state.totalPrice - parseInt(findPro.price) * findPro.quantity,
        totalQuantities: state.totalQuantities - findPro.quantity,
      };
    case "EMPTY_CART":
      return {
        ...state,
        cartProducts: []
      }
    default:
      return state;
  }
};
export default cartReducer;
