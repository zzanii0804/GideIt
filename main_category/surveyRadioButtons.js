let surveyData = {};

        function nextQuestion(current, next, groupName) {
            const selected = document.querySelector(`input[name="${groupName}"]:checked`);
            if (!selected) {
                alert("옵션을 선택해주세요!");
                return;
            }
            surveyData[groupName] = selected.value; // 선택된 값 저장
            document.getElementById(current).classList.add('hidden');
            document.getElementById(next).classList.remove('hidden');
        }

        function laptopsubmitSurvey() {
            const selected = document.querySelector('input[name="priority"]:checked');
            if (!selected) {
                alert("마지막 질문의 옵션을 선택해주세요!");
                return;
            }
            surveyData["priority"] = selected.value; // 마지막 질문 데이터 저장

            // 설문 데이터로 URL 결정
            const url = laptopdetermineURL(surveyData);
            window.location.href = url; // 해당 URL로 이동
        }

        function earphonssubmitSurvey() {
            const selected = document.querySelector('input[name="monitor"]:checked');
            if (!selected) {
                alert("마지막 질문의 옵션을 선택해주세요!");
                return;
            }
            surveyData["priority"] = selected.value; // 마지막 질문 데이터 저장

            // 설문 데이터로 URL 결정
            const url = earphonsdetermineURL(surveyData);
            window.location.href = url; // 해당 URL로 이동
        }

        function monitorsubmitSurvey() {
            const selected = document.querySelector('input[name="priority"]:checked');
            if (!selected) {
                alert("마지막 질문의 옵션을 선택해주세요!");
                return;
            }
            surveyData["priority"] = selected.value; // 마지막 질문 데이터 저장

            // 설문 데이터로 URL 결정
            const url = monitordetermineURL(surveyData);
            window.location.href = url; // 해당 URL로 이동
        }

        function TVsubmitSurvey() {
            const selected = document.querySelector('input[name="priority"]:checked');
            if (!selected) {
                alert("마지막 질문의 옵션을 선택해주세요!");
                return;
            }
            surveyData["priority"] = selected.value; // 마지막 질문 데이터 저장

            // 설문 데이터로 URL 결정
            const url = TVdetermineURL(surveyData);
            window.location.href = url; // 해당 URL로 이동
        }

        function tabletsubmitSurvey() {
            const selected = document.querySelector('input[name="priority"]:checked');
            if (!selected) {
                alert("마지막 질문의 옵션을 선택해주세요!");
                return;
            }
            surveyData["priority"] = selected.value; // 마지막 질문 데이터 저장

            // 설문 데이터로 URL 결정
            const url = tabletdetermineURL(surveyData);
            window.location.href = url; // 해당 URL로 이동
        }

        

        function laptopdetermineURL(data) {
            switch(data.price){
                case "100 or less": 
                    switch(data.maker){
                        case "domestic":
                            switch(data.priority){
                                case "performance": return "http://itempage3.auction.co.kr/DetailView.aspx?itemno=E275913706";
                                case "lightweight": return "https://item.gmarket.co.kr/Item?goodscode=3666676407&lcd=100000002&NaPm=ct%3Dm48wft00%7Cci%3Db10bd0c57a770efeb58dc876b1d6839f2aae26fd%7Ctr%3Dslsbrc%7Csn%3D24%7Chk%3Dc091bf22ae6d7e6e6c37955c9f2b0ef9a9682191&jaehuid=200001169";
                                case "display": return "https://smartstore.naver.com/first9s/products/8985667524?nl-query=LG%EC%A0%84%EC%9E%90+%EC%9A%B8%ED%8A%B8%EB%9D%BCPC+%EC%97%A3%EC%A7%80+16U70R-GA56K&nl-ts-pid=i09FbwpzLi0ssmDtGANssssssk0-143972&NaPm=ct%3Dm48wgomw%7Cci%3Df568813ef3c909b70cd0cb11c5f877dec9bc18a4%7Ctr%3Dsls%7Csn%3D1748096%7Chk%3D84a519f78f8ba0a792cc1d7a939271b204657b4d";

                            }
                        case "foreign":   
                            switch(data.priority){
                                case "performance": return "https://www.hmall.com/pd/pda/itemPtc?ReferCode=605&slitmCd=2217784443&utm_source=nosearch&utm_medium=cps_pcs&utm_campaign=sale&service_id=estimatedn&TcCode=0000004505&openNativeBrowser=true";
                                case "lightweight": return "https://www.coupang.com/vp/products/7842749060?itemId=21354421906&vendorItemId=88412025924&src=1139000&spec=10799999&addtag=400&ctag=7842749060&lptag=AF8665261&itime=20241204052148&pageType=PRODUCT&pageValue=7842749060&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204052148&redirect=landing&traceid=&mcid=de318cee6e844d5b85d988c43b07c214&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MDZhNTZjZm";
                                case "display": return "https://smartstore.naver.com/noteinside/products/9045489263?NaPm=ct%3Dm48wocvc%7Cci%3Dd5027066b024a73a2fee6cd740fd46446fb3cb0f%7Ctr%3Dslsl%7Csn%3D2725582%7Chk%3D825c2a8ec29eb3dccfed800f9a6476a11fc4f470&nl-au=edbdaf804cfb4b6f8a580a9e2aa92051&nl-query=ASUS+%EB%B9%84%EB%B3%B4%EB%B6%81+16X+OLED+M3604YA-L2030";
                             
                            }
                        case "no-preference":
                            switch(data.priority){
                                case "performance": return "https://www.hmall.com/pd/pda/itemPtc?ReferCode=605&slitmCd=2217784443&utm_source=nosearch&utm_medium=cps_pcs&utm_campaign=sale&service_id=estimatedn&TcCode=0000004505&openNativeBrowser=true";
                                case "lightweight": return "https://item.gmarket.co.kr/Item?goodscode=3666676407&lcd=100000002&NaPm=ct%3Dm48wqqio%7Cci%3D486a069cba62ad36a2e8c3551879ab0ef978e643%7Ctr%3Dslsbrc%7Csn%3D24%7Chk%3Dd5c255a91c85f2ead294c615f20fabc71694e34d&jaehuid=200001169";
                                case "display": return "https://www.coupang.com/vp/products/7720675222?itemId=21113151916&vendorItemId=88175006223&src=1139000&spec=10799999&addtag=400&ctag=7720675222&lptag=AF8665261&itime=20241204052338&pageType=PRODUCT&pageValue=7720675222&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204052338&redirect=landing&traceid=&mcid=48da865b27c64844b9f47ce03386f6fe&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=NGNjMGQyYj";
                                
                            }    
                    }
                case "150":
                    switch(data.maker){
                        case "domestic":
                            switch(data.priority){
                                case "performance": return "https://www.coupang.com/vp/products/8360764820?itemId=24161092993&vendorItemId=91179673905&src=1139000&spec=10799999&addtag=400&ctag=8360764820&lptag=AF8665261&itime=20241204052725&pageType=PRODUCT&pageValue=8360764820&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204052725&redirect=landing&traceid=&mcid=f92b971091bc4bca9c441e5d45953586&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=ZWJkMjQxM2";
                                case "lightweight": return "https://www.coupang.com/vp/products/7662564392?itemId=22918242442&vendorItemId=91256762571&src=1139000&spec=10799999&addtag=400&ctag=7662564392&lptag=AF8665261&itime=20241204052808&pageType=PRODUCT&pageValue=7662564392&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204052808&redirect=landing&traceid=&mcid=69c16d9e7a5f4506b11225c9ca5f2fe2&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MmNiZTY1MD";
                                case "display": return "https://www.coupang.com/vp/products/7662564392?itemId=22918242442&vendorItemId=91256762571&src=1139000&spec=10799999&addtag=400&ctag=7662564392&lptag=AF8665261&itime=20241204052808&pageType=PRODUCT&pageValue=7662564392&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204052808&redirect=landing&traceid=&mcid=69c16d9e7a5f4506b11225c9ca5f2fe2&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MmNiZTY1MD";
                            }
                        case "foreign":   
                            switch(data.priority){
                                case "performance": return "https://smartstore.naver.com/siscompany2/products/10739992105?NaPm=ct%3Dm48wxgsw%7Cci%3Da2d314cb8e24591a4220455eb02a2ecac0fc070d%7Ctr%3Dslsbrc%7Csn%3D8016034%7Chk%3D11d4475cbce8f775da5f268e6df42b40c7559fd9&nl-query=%EB%A0%88%EB%85%B8%EB%B2%84+LEGION+5i+15IRX9+i7+4060";
                                case "lightweight": return "https://www.coupang.com/vp/products/8123591797?itemId=23052942007&vendorItemId=90086602360&src=1139000&spec=10799999&addtag=400&ctag=8123591797&lptag=AF8665261&itime=20241204053026&pageType=PRODUCT&pageValue=8123591797&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053026&redirect=landing&traceid=&mcid=6f0811989be842adba5c5293067d1433&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=ZmIwYTI2MD";
                                case "display": return "https://www.coupang.com/vp/products/8326895029?itemId=24038363247&vendorItemId=91058643045&src=1139000&spec=10799999&addtag=400&ctag=8326895029&lptag=AF8665261&itime=20241204053000&pageType=PRODUCT&pageValue=8326895029&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053000&redirect=landing&traceid=&mcid=dbcbd1d100454798a46b0c6178936d1c&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=YTAxMDA2ZG";
                            
                            }
                        case "no-preference":
                            switch(data.priority){
                                case "performance": return "https://smartstore.naver.com/siscompany2/products/10739992105?NaPm=ct%3Dm48wrq0g%7Cci%3Ddc12b591a9e91f77f43a9eb80f7ab732810a9967%7Ctr%3Dslsbrc%7Csn%3D8016034%7Chk%3D5ea86fa3455eb111e9319a659190c5ca38cfccd3&nl-query=%EB%A0%88%EB%85%B8%EB%B2%84+LEGION+5i+15IRX9+i7+4060";
                                case "lightweight": return "https://smartstore.naver.com/first9s/products/9767329508?nl-query=LG%EC%A0%84%EC%9E%90+2024+%EA%B7%B8%EB%9E%A8+%ED%94%84%EB%A1%9C16+16Z90SP-GA5HK&nl-ts-pid=i09pRlqVOsVssKlijERssssstZ0-421666&NaPm=ct%3Dm48wsrtk%7Cci%3D45ea73d39c31f7766542f12c193a1ba822c78579%7Ctr%3Dsls%7Csn%3D1748096%7Chk%3D365aaf2747b2af7fde8ef666c29e45af30961ded";
                                case "display": return "https://www.lotteon.com/p/product/LO2381749649?sitmNo=LO2381749649_2381749650&ch_no=100065&ch_dtl_no=1000030&entryPoint=pcs&dp_infw_cd=CHT&NaPm=ct%3Dm48wtha8%7Cci%3D63f1e8b95c7c542e32f6d9d4cce3849ba2af0382%7Ctr%3Dsls%7Csn%3D1243359%7Chk%3D21f035cf3a689c59f634e0da218c921334246e42";

                            }    
                    }
                    
                case "150 or more":
                    switch(data.maker){
                        case "domestic":
                            switch(data.priority){
                                case "performance": return "https://www.coupang.com/vp/products/8448208536?itemId=24439534244&vendorItemId=91503410993&src=1139000&spec=10799999&addtag=400&ctag=8448208536&lptag=AF8665261&itime=20241204053256&pageType=PRODUCT&pageValue=8448208536&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053256&redirect=landing&traceid=&mcid=3a114182597a4f4294891625271e7e85&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MTE2Yzg5OT";
                                case "lightweight": return "https://www.coupang.com/vp/products/7430382927?itemId=18395905505&vendorItemId=85946869424&src=1139000&spec=10799999&addtag=400&ctag=7430382927&lptag=AF8665261&itime=20241204053433&pageType=PRODUCT&pageValue=7430382927&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053433&redirect=landing&traceid=&mcid=ce0d3c8bf64b46ebb8a33c3ac25f3e6d&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=ZjI4YzIyOD";
                                case "display": return "https://www.hmall.com/pd/pda/itemPtc?ReferCode=605&slitmCd=2223164319&utm_source=nosearch&utm_medium=cps_pcs&utm_campaign=sale&service_id=estimatedn&TcCode=0000004505&openNativeBrowser=true";

                            }
                        case "foreign":   
                            switch(data.priority){
                                case "performance": return "https://www.coupang.com/vp/products/8065234662?itemId=22681095513&vendorItemId=89717245956&src=1139000&spec=10799999&addtag=400&ctag=8065234662&lptag=AF8665261&itime=20241204053117&pageType=PRODUCT&pageValue=8065234662&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053117&redirect=landing&traceid=&mcid=da0fe5f017da4035ad186ed7063e1b5b&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MGYwNjU3ZW";
                                case "lightweight": return "https://www.e-himart.co.kr/app/goods/goodsDetail?goodsNo=0021464869&utm_source=nosearch&utm_medium=CPS&utm_campaign=nosearch&fromShop=nosearch&referrer=nosearch_app&openNativeBrowser=true";
                                case "display": return "https://www.e-himart.co.kr/app/goods/goodsDetail?goodsNo=0021408907&utm_source=nosearch&utm_medium=CPS&utm_campaign=nosearch&fromShop=nosearch&referrer=nosearch_app&openNativeBrowser=true";
                            
                            }
                        case "no-preference":
                            switch(data.priority){
                                case "performance": return "https://www.coupang.com/vp/products/8340010597?itemId=24084663968&vendorItemId=91104195853&src=1139000&spec=10799999&addtag=400&ctag=8340010597&lptag=AF8665261&itime=20241204053459&pageType=PRODUCT&pageValue=8340010597&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053459&redirect=landing&traceid=&mcid=060d8284846f4b6cb45c62b0b2aca8d0&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=NDMyOWQwZD";
                                case "lightweight": return "https://www.hmall.com/pd/pda/itemPtc?ReferCode=605&slitmCd=2223164319&utm_source=nosearch&utm_medium=cps_pcs&utm_campaign=sale&service_id=estimatedn&TcCode=0000004505&openNativeBrowser=true";
                                case "display": return "https://www.coupang.com/vp/products/7744436213?itemId=21131253902&vendorItemId=88192978728&src=1139000&spec=10799999&addtag=400&ctag=7744436213&lptag=AF8665261&itime=20241204053549&pageType=PRODUCT&pageValue=7744436213&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053549&redirect=landing&traceid=&mcid=1dbf69fd8bbe4997a5d335f494e9d253&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=Nzg5ODgxMT";

                            }    
                    }


                default:
                    // 기본 URL
                    return "result/general.html";
            }    
        }

        function earphonsdetermineURL(data) {
            switch(data.price){
                case "max20": 
                    switch(data.maker){
                        case "short":
                            switch(data.monitor){
                                case "canal": return "https://smartstore.naver.com/greensound/products/3990098338?nl-query=Britz+EARFIT+TWS7&nl-ts-pid=i093gsqo1e8ssMVqTIwssssssWl-107335&NaPm=ct%3Dm48yxixs%7Cci%3D0879d2f5bbf7b7e8b0d03e79cf5c728d35cc1d2e%7Ctr%3Dsls%7Csn%3D183114%7Chk%3D0f7e4cd54446d133782617bd4b9a8f59b2633fe5";
                                case "sanggwun": return "https://ohou.se/productions/2799305/selling?airbridge_referrer=airbridge%3Dtrue%26event_uuid%3D78f46c7d-fc7d-4015-9a66-7c5b1b283ecc%26client_id%3D7f02c81e-ecb6-4f52-a581-46f86f674f8a%26referrer_timestamp%3D1733261180600%26channel%3Daffiliate%26campaign%3Dbrand_affiliate%26ad_group%3D18508726%26ad_creative%3D10861%26content%3Dproduction_2799305%26term%3D20241203%26sub_id_2%3Downedmedia%26sub_id_3%3Dinorganic%26openNativeBrowser%3Dtrue&utm_source=affiliate&utm_campaign=brand_affiliate&utm_term=20241203&utm_content=production_2799305&fallback_desktop=https%3A%2F%2Fohou.se%2Fproductions%2F2799305%2Fselling&deeplink_url=ohouseapp%3A%2F%2Fohou.se%2Fproductions%2F2799305%2Fselling&ad_creative=10861&ad_group=18508726&content=production_2799305&campaign=brand_affiliate&sub_id_2=ownedmedia&sub_id_3=inorganic&term=20241203&openNativeBrowser=true";
                                case "open": return "https://ohou.se/productions/2799305/selling?airbridge_referrer=airbridge%3Dtrue%26event_uuid%3D78f46c7d-fc7d-4015-9a66-7c5b1b283ecc%26client_id%3D7f02c81e-ecb6-4f52-a581-46f86f674f8a%26referrer_timestamp%3D1733261180600%26channel%3Daffiliate%26campaign%3Dbrand_affiliate%26ad_group%3D18508726%26ad_creative%3D10861%26content%3Dproduction_2799305%26term%3D20241203%26sub_id_2%3Downedmedia%26sub_id_3%3Dinorganic%26openNativeBrowser%3Dtrue&utm_source=affiliate&utm_campaign=brand_affiliate&utm_term=20241203&utm_content=production_2799305&fallback_desktop=https%3A%2F%2Fohou.se%2Fproductions%2F2799305%2Fselling&deeplink_url=ohouseapp%3A%2F%2Fohou.se%2Fproductions%2F2799305%2Fselling&ad_creative=10861&ad_group=18508726&content=production_2799305&campaign=brand_affiliate&sub_id_2=ownedmedia&sub_id_3=inorganic&term=20241203&openNativeBrowser=true";

                            }
                        case "long":   
                            switch(data.monitor){
                                case "canal": return "https://www.coupang.com/vp/products/8161748614?itemId=23271146575&vendorItemId=90303476746&src=1139000&spec=10799999&addtag=400&ctag=8161748614&lptag=AF8665261&itime=20241204062805&pageType=PRODUCT&pageValue=8161748614&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204062805&redirect=landing&traceid=&mcid=3032765e1a484f6493b501e9cf7b35fa&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MDI0OTg4Zj";
                                case "sanggwun": return "https://www.coupang.com/vp/products/8161748614?itemId=23271146575&vendorItemId=90303476746&src=1139000&spec=10799999&addtag=400&ctag=8161748614&lptag=AF8665261&itime=20241204062805&pageType=PRODUCT&pageValue=8161748614&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204062805&redirect=landing&traceid=&mcid=3032765e1a484f6493b501e9cf7b35fa&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MDI0OTg4Zj";
                                case "open": return "https://www.coupang.com/vp/products/6354977072?itemId=13389049815&vendorItemId=80643893276&src=1139000&spec=10799999&addtag=400&ctag=6354977072&lptag=AF8665261&itime=20241204062915&pageType=PRODUCT&pageValue=6354977072&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204062915&redirect=landing&traceid=&mcid=83ee89a2973946308bb7d2355d556e9c&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=OWZiOWE5YW";
                             
                            }
                    }
                case "20over":
                    switch(data.maker){
                        case "short":
                            switch(data.monitor){
                                case "canal": return "https://www.lotteon.com/p/product/LO2372426417?sitmNo=LO2372426417_2372426418&ch_no=100065&ch_dtl_no=1000030&entryPoint=pcs&dp_infw_cd=CHT&NaPm=ct%3Dm48ytkyo%7Cci%3D7d74d7576d7cdcffbd4501b8c9948ef414783fe7%7Ctr%3Dsls%7Csn%3D1243359%7Chk%3D70c5a63bd00682ea65745025bc74f22133f71f9e";
                                case "sanggwun": return "https://www.e-himart.co.kr/app/goods/goodsDetail?goodsNo=0026701329&utm_source=nosearch&utm_medium=CPS&utm_campaign=nosearch&fromShop=nosearch&referrer=nosearch_app&openNativeBrowser=true";
                                case "open": return "https://www.e-himart.co.kr/app/goods/goodsDetail?goodsNo=0026701329&utm_source=nosearch&utm_medium=CPS&utm_campaign=nosearch&fromShop=nosearch&referrer=nosearch_app&openNativeBrowser=true";
                            }
                        case "long":   
                            switch(data.monitor){
                                case "canal": return "https://www.lotteon.com/p/product/LO2227002815?sitmNo=LO2227002815_2227002817&ch_no=100065&ch_dtl_no=1000030&entryPoint=pcs&dp_infw_cd=CHT&NaPm=ct%3Dm48yv8dk%7Cci%3Dc3be685445814abef6787189fcfff131a390bfcd%7Ctr%3Dslsbrc%7Csn%3D1243359%7Chk%3D6d963966bfb6c7cd018fd7cb6033da28539e3ddd";
                                case "sanggwun": return "https://www.coupang.com/vp/products/7664757358?itemId=20429566044&vendorItemId=87843039907&src=1139000&spec=10799999&addtag=400&ctag=7664757358&lptag=AF8665261&itime=20241204062427&pageType=PRODUCT&pageValue=7664757358&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204062427&redirect=landing&traceid=&mcid=b8911e9c2d1543059f81945328251273&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=ZDRmZTMwYz";
                                case "open": return "https://www.lotteon.com/p/product/LO2227002815?sitmNo=LO2227002815_2227002817&ch_no=100065&ch_dtl_no=1000030&entryPoint=pcs&dp_infw_cd=CHT&NaPm=ct%3Dm48yv8dk%7Cci%3Dc3be685445814abef6787189fcfff131a390bfcd%7Ctr%3Dslsbrc%7Csn%3D1243359%7Chk%3D6d963966bfb6c7cd018fd7cb6033da28539e3ddd";
                            
                            }
                    }
                    
                case "max10":
                    switch(data.maker){
                        case "short":
                            switch(data.monitor){
                                case "canal": return "https://www.ssg.com/item/itemView.ssg?itemId=1000561831287&siteNo=6001&salestrNo=6005&ckwhere=ssg_naver&appPopYn=n&utm_medium=PCS&utm_source=naver&utm_campaign=naver_pcs&NaPm=ct%3Dm48z8r9c%7Cci%3D5b7be6a71b92240db5ae503f6699f01a328e7abf%7Ctr%3Dsls%7Csn%3D218835%7Chk%3D5c878ae10427184f42380d93ca094444eb642e6d";
                                case "sanggwun": return "https://www.ssg.com/item/itemView.ssg?itemId=1000561831287&siteNo=6001&salestrNo=6005&ckwhere=ssg_naver&appPopYn=n&utm_medium=PCS&utm_source=naver&utm_campaign=naver_pcs&NaPm=ct%3Dm48z8r9c%7Cci%3D5b7be6a71b92240db5ae503f6699f01a328e7abf%7Ctr%3Dsls%7Csn%3D218835%7Chk%3D5c878ae10427184f42380d93ca094444eb642e6d";
                                case "open": return "https://smartstore.naver.com/rlatjrgml1111/products/10599692246?nl-query=COX+CWS100&nl-ts-pid=i09Howqps8wssNuxkIVssssstKo-177732&NaPm=ct%3Dm48zag7s%7Cci%3D8cc77a72d1fa3b9c7fffee9b292a49fb3920935f%7Ctr%3Dsls%7Csn%3D7863686%7Chk%3D56d0d43010a09edfd02b9aee098718acfe528a48";

                            }
                        case "long":   
                            switch(data.monitor){
                                case "canal": return "https://www.coupang.com/vp/products/7650123450?itemId=20352812061&vendorItemId=87437257358&src=1139000&spec=10799999&addtag=400&ctag=7650123450&lptag=AF8665261&itime=20241204063225&pageType=PRODUCT&pageValue=7650123450&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204063225&redirect=landing&traceid=&mcid=1956f2c2b2994199825052a932835800&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=ZDZhZWU5Zj";
                                case "sanggwun": return "https://www.coupang.com/vp/products/7650123450?itemId=20352812061&vendorItemId=87437257358&src=1139000&spec=10799999&addtag=400&ctag=7650123450&lptag=AF8665261&itime=20241204063225&pageType=PRODUCT&pageValue=7650123450&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204063225&redirect=landing&traceid=&mcid=1956f2c2b2994199825052a932835800&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=ZDZhZWU5Zj";
                                case "open": return "https://www.coupang.com/vp/products/7826640970?itemId=19803298056&vendorItemId=88204486780&src=1139000&spec=10799999&addtag=400&ctag=7826640970&lptag=AF8665261&itime=20241204063257&pageType=PRODUCT&pageValue=7826640970&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204063257&redirect=landing&traceid=&mcid=42648a834b134940a9c4ac3ecd60dd23&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=YWFjMzM4Nm";
                            
                            }
                    }


                default:
                    // 기본 URL
                    return "result/general.html";
            }    
        }
        
        function monitordetermineURL(data) {
            switch(data.price){
                case "100 or less": 
                    switch(data.maker){
                        case "domestic":
                            switch(data.priority){
                                case "performance": return "http://itempage3.auction.co.kr/DetailView.aspx?itemno=E275913706";
                                case "lightweight": return "https://item.gmarket.co.kr/Item?goodscode=3666676407&lcd=100000002&NaPm=ct%3Dm48wft00%7Cci%3Db10bd0c57a770efeb58dc876b1d6839f2aae26fd%7Ctr%3Dslsbrc%7Csn%3D24%7Chk%3Dc091bf22ae6d7e6e6c37955c9f2b0ef9a9682191&jaehuid=200001169";
                                case "display": return "https://smartstore.naver.com/first9s/products/8985667524?nl-query=LG%EC%A0%84%EC%9E%90+%EC%9A%B8%ED%8A%B8%EB%9D%BCPC+%EC%97%A3%EC%A7%80+16U70R-GA56K&nl-ts-pid=i09FbwpzLi0ssmDtGANssssssk0-143972&NaPm=ct%3Dm48wgomw%7Cci%3Df568813ef3c909b70cd0cb11c5f877dec9bc18a4%7Ctr%3Dsls%7Csn%3D1748096%7Chk%3D84a519f78f8ba0a792cc1d7a939271b204657b4d";

                            }
                        case "foreign":   
                            switch(data.priority){
                                case "performance": return "https://www.hmall.com/pd/pda/itemPtc?ReferCode=605&slitmCd=2217784443&utm_source=nosearch&utm_medium=cps_pcs&utm_campaign=sale&service_id=estimatedn&TcCode=0000004505&openNativeBrowser=true";
                                case "lightweight": return "https://www.coupang.com/vp/products/7842749060?itemId=21354421906&vendorItemId=88412025924&src=1139000&spec=10799999&addtag=400&ctag=7842749060&lptag=AF8665261&itime=20241204052148&pageType=PRODUCT&pageValue=7842749060&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204052148&redirect=landing&traceid=&mcid=de318cee6e844d5b85d988c43b07c214&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MDZhNTZjZm";
                                case "display": return "https://smartstore.naver.com/noteinside/products/9045489263?NaPm=ct%3Dm48wocvc%7Cci%3Dd5027066b024a73a2fee6cd740fd46446fb3cb0f%7Ctr%3Dslsl%7Csn%3D2725582%7Chk%3D825c2a8ec29eb3dccfed800f9a6476a11fc4f470&nl-au=edbdaf804cfb4b6f8a580a9e2aa92051&nl-query=ASUS+%EB%B9%84%EB%B3%B4%EB%B6%81+16X+OLED+M3604YA-L2030";
                             
                            }
                        case "no-preference":
                            switch(data.priority){
                                case "performance": return "https://www.hmall.com/pd/pda/itemPtc?ReferCode=605&slitmCd=2217784443&utm_source=nosearch&utm_medium=cps_pcs&utm_campaign=sale&service_id=estimatedn&TcCode=0000004505&openNativeBrowser=true";
                                case "lightweight": return "https://item.gmarket.co.kr/Item?goodscode=3666676407&lcd=100000002&NaPm=ct%3Dm48wqqio%7Cci%3D486a069cba62ad36a2e8c3551879ab0ef978e643%7Ctr%3Dslsbrc%7Csn%3D24%7Chk%3Dd5c255a91c85f2ead294c615f20fabc71694e34d&jaehuid=200001169";
                                case "display": return "https://www.coupang.com/vp/products/7720675222?itemId=21113151916&vendorItemId=88175006223&src=1139000&spec=10799999&addtag=400&ctag=7720675222&lptag=AF8665261&itime=20241204052338&pageType=PRODUCT&pageValue=7720675222&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204052338&redirect=landing&traceid=&mcid=48da865b27c64844b9f47ce03386f6fe&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=NGNjMGQyYj";
                                
                            }    
                    }
                case "150":
                    switch(data.maker){
                        case "domestic":
                            switch(data.priority){
                                case "performance": return "https://www.coupang.com/vp/products/8360764820?itemId=24161092993&vendorItemId=91179673905&src=1139000&spec=10799999&addtag=400&ctag=8360764820&lptag=AF8665261&itime=20241204052725&pageType=PRODUCT&pageValue=8360764820&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204052725&redirect=landing&traceid=&mcid=f92b971091bc4bca9c441e5d45953586&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=ZWJkMjQxM2";
                                case "lightweight": return "https://www.coupang.com/vp/products/7662564392?itemId=22918242442&vendorItemId=91256762571&src=1139000&spec=10799999&addtag=400&ctag=7662564392&lptag=AF8665261&itime=20241204052808&pageType=PRODUCT&pageValue=7662564392&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204052808&redirect=landing&traceid=&mcid=69c16d9e7a5f4506b11225c9ca5f2fe2&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MmNiZTY1MD";
                                case "display": return "https://www.coupang.com/vp/products/7662564392?itemId=22918242442&vendorItemId=91256762571&src=1139000&spec=10799999&addtag=400&ctag=7662564392&lptag=AF8665261&itime=20241204052808&pageType=PRODUCT&pageValue=7662564392&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204052808&redirect=landing&traceid=&mcid=69c16d9e7a5f4506b11225c9ca5f2fe2&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MmNiZTY1MD";
                            }
                        case "foreign":   
                            switch(data.priority){
                                case "performance": return "https://smartstore.naver.com/siscompany2/products/10739992105?NaPm=ct%3Dm48wxgsw%7Cci%3Da2d314cb8e24591a4220455eb02a2ecac0fc070d%7Ctr%3Dslsbrc%7Csn%3D8016034%7Chk%3D11d4475cbce8f775da5f268e6df42b40c7559fd9&nl-query=%EB%A0%88%EB%85%B8%EB%B2%84+LEGION+5i+15IRX9+i7+4060";
                                case "lightweight": return "https://www.coupang.com/vp/products/8123591797?itemId=23052942007&vendorItemId=90086602360&src=1139000&spec=10799999&addtag=400&ctag=8123591797&lptag=AF8665261&itime=20241204053026&pageType=PRODUCT&pageValue=8123591797&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053026&redirect=landing&traceid=&mcid=6f0811989be842adba5c5293067d1433&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=ZmIwYTI2MD";
                                case "display": return "https://www.coupang.com/vp/products/8326895029?itemId=24038363247&vendorItemId=91058643045&src=1139000&spec=10799999&addtag=400&ctag=8326895029&lptag=AF8665261&itime=20241204053000&pageType=PRODUCT&pageValue=8326895029&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053000&redirect=landing&traceid=&mcid=dbcbd1d100454798a46b0c6178936d1c&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=YTAxMDA2ZG";
                            
                            }
                        case "no-preference":
                            switch(data.priority){
                                case "performance": return "https://smartstore.naver.com/siscompany2/products/10739992105?NaPm=ct%3Dm48wrq0g%7Cci%3Ddc12b591a9e91f77f43a9eb80f7ab732810a9967%7Ctr%3Dslsbrc%7Csn%3D8016034%7Chk%3D5ea86fa3455eb111e9319a659190c5ca38cfccd3&nl-query=%EB%A0%88%EB%85%B8%EB%B2%84+LEGION+5i+15IRX9+i7+4060";
                                case "lightweight": return "https://smartstore.naver.com/first9s/products/9767329508?nl-query=LG%EC%A0%84%EC%9E%90+2024+%EA%B7%B8%EB%9E%A8+%ED%94%84%EB%A1%9C16+16Z90SP-GA5HK&nl-ts-pid=i09pRlqVOsVssKlijERssssstZ0-421666&NaPm=ct%3Dm48wsrtk%7Cci%3D45ea73d39c31f7766542f12c193a1ba822c78579%7Ctr%3Dsls%7Csn%3D1748096%7Chk%3D365aaf2747b2af7fde8ef666c29e45af30961ded";
                                case "display": return "https://www.lotteon.com/p/product/LO2381749649?sitmNo=LO2381749649_2381749650&ch_no=100065&ch_dtl_no=1000030&entryPoint=pcs&dp_infw_cd=CHT&NaPm=ct%3Dm48wtha8%7Cci%3D63f1e8b95c7c542e32f6d9d4cce3849ba2af0382%7Ctr%3Dsls%7Csn%3D1243359%7Chk%3D21f035cf3a689c59f634e0da218c921334246e42";

                            }    
                    }
                    
                case "150 or more":
                    switch(data.maker){
                        case "domestic":
                            switch(data.priority){
                                case "performance": return "https://www.coupang.com/vp/products/8448208536?itemId=24439534244&vendorItemId=91503410993&src=1139000&spec=10799999&addtag=400&ctag=8448208536&lptag=AF8665261&itime=20241204053256&pageType=PRODUCT&pageValue=8448208536&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053256&redirect=landing&traceid=&mcid=3a114182597a4f4294891625271e7e85&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MTE2Yzg5OT";
                                case "lightweight": return "https://www.coupang.com/vp/products/7430382927?itemId=18395905505&vendorItemId=85946869424&src=1139000&spec=10799999&addtag=400&ctag=7430382927&lptag=AF8665261&itime=20241204053433&pageType=PRODUCT&pageValue=7430382927&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053433&redirect=landing&traceid=&mcid=ce0d3c8bf64b46ebb8a33c3ac25f3e6d&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=ZjI4YzIyOD";
                                case "display": return "https://www.hmall.com/pd/pda/itemPtc?ReferCode=605&slitmCd=2223164319&utm_source=nosearch&utm_medium=cps_pcs&utm_campaign=sale&service_id=estimatedn&TcCode=0000004505&openNativeBrowser=true";

                            }
                        case "foreign":   
                            switch(data.priority){
                                case "performance": return "https://www.coupang.com/vp/products/8065234662?itemId=22681095513&vendorItemId=89717245956&src=1139000&spec=10799999&addtag=400&ctag=8065234662&lptag=AF8665261&itime=20241204053117&pageType=PRODUCT&pageValue=8065234662&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053117&redirect=landing&traceid=&mcid=da0fe5f017da4035ad186ed7063e1b5b&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MGYwNjU3ZW";
                                case "lightweight": return "https://www.e-himart.co.kr/app/goods/goodsDetail?goodsNo=0021464869&utm_source=nosearch&utm_medium=CPS&utm_campaign=nosearch&fromShop=nosearch&referrer=nosearch_app&openNativeBrowser=true";
                                case "display": return "https://www.e-himart.co.kr/app/goods/goodsDetail?goodsNo=0021408907&utm_source=nosearch&utm_medium=CPS&utm_campaign=nosearch&fromShop=nosearch&referrer=nosearch_app&openNativeBrowser=true";
                            
                            }
                        case "no-preference":
                            switch(data.priority){
                                case "performance": return "https://www.coupang.com/vp/products/8340010597?itemId=24084663968&vendorItemId=91104195853&src=1139000&spec=10799999&addtag=400&ctag=8340010597&lptag=AF8665261&itime=20241204053459&pageType=PRODUCT&pageValue=8340010597&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053459&redirect=landing&traceid=&mcid=060d8284846f4b6cb45c62b0b2aca8d0&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=NDMyOWQwZD";
                                case "lightweight": return "https://www.hmall.com/pd/pda/itemPtc?ReferCode=605&slitmCd=2223164319&utm_source=nosearch&utm_medium=cps_pcs&utm_campaign=sale&service_id=estimatedn&TcCode=0000004505&openNativeBrowser=true";
                                case "display": return "https://www.coupang.com/vp/products/7744436213?itemId=21131253902&vendorItemId=88192978728&src=1139000&spec=10799999&addtag=400&ctag=7744436213&lptag=AF8665261&itime=20241204053549&pageType=PRODUCT&pageValue=7744436213&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053549&redirect=landing&traceid=&mcid=1dbf69fd8bbe4997a5d335f494e9d253&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=Nzg5ODgxMT";

                            }    
                    }


                default:
                    // 기본 URL
                    return "result/general.html";
            }    
        }
 
        function TVdetermineURL(data) {
            switch(data.price){
                case "100 or less": 
                    switch(data.maker){
                        case "domestic":
                            switch(data.priority){
                                case "performance": return "http://itempage3.auction.co.kr/DetailView.aspx?itemno=E275913706";
                                case "lightweight": return "https://item.gmarket.co.kr/Item?goodscode=3666676407&lcd=100000002&NaPm=ct%3Dm48wft00%7Cci%3Db10bd0c57a770efeb58dc876b1d6839f2aae26fd%7Ctr%3Dslsbrc%7Csn%3D24%7Chk%3Dc091bf22ae6d7e6e6c37955c9f2b0ef9a9682191&jaehuid=200001169";
                                case "display": return "https://smartstore.naver.com/first9s/products/8985667524?nl-query=LG%EC%A0%84%EC%9E%90+%EC%9A%B8%ED%8A%B8%EB%9D%BCPC+%EC%97%A3%EC%A7%80+16U70R-GA56K&nl-ts-pid=i09FbwpzLi0ssmDtGANssssssk0-143972&NaPm=ct%3Dm48wgomw%7Cci%3Df568813ef3c909b70cd0cb11c5f877dec9bc18a4%7Ctr%3Dsls%7Csn%3D1748096%7Chk%3D84a519f78f8ba0a792cc1d7a939271b204657b4d";

                            }
                        case "foreign":   
                            switch(data.priority){
                                case "performance": return "https://www.hmall.com/pd/pda/itemPtc?ReferCode=605&slitmCd=2217784443&utm_source=nosearch&utm_medium=cps_pcs&utm_campaign=sale&service_id=estimatedn&TcCode=0000004505&openNativeBrowser=true";
                                case "lightweight": return "https://www.coupang.com/vp/products/7842749060?itemId=21354421906&vendorItemId=88412025924&src=1139000&spec=10799999&addtag=400&ctag=7842749060&lptag=AF8665261&itime=20241204052148&pageType=PRODUCT&pageValue=7842749060&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204052148&redirect=landing&traceid=&mcid=de318cee6e844d5b85d988c43b07c214&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MDZhNTZjZm";
                                case "display": return "https://smartstore.naver.com/noteinside/products/9045489263?NaPm=ct%3Dm48wocvc%7Cci%3Dd5027066b024a73a2fee6cd740fd46446fb3cb0f%7Ctr%3Dslsl%7Csn%3D2725582%7Chk%3D825c2a8ec29eb3dccfed800f9a6476a11fc4f470&nl-au=edbdaf804cfb4b6f8a580a9e2aa92051&nl-query=ASUS+%EB%B9%84%EB%B3%B4%EB%B6%81+16X+OLED+M3604YA-L2030";
                             
                            }
                        case "no-preference":
                            switch(data.priority){
                                case "performance": return "https://www.hmall.com/pd/pda/itemPtc?ReferCode=605&slitmCd=2217784443&utm_source=nosearch&utm_medium=cps_pcs&utm_campaign=sale&service_id=estimatedn&TcCode=0000004505&openNativeBrowser=true";
                                case "lightweight": return "https://item.gmarket.co.kr/Item?goodscode=3666676407&lcd=100000002&NaPm=ct%3Dm48wqqio%7Cci%3D486a069cba62ad36a2e8c3551879ab0ef978e643%7Ctr%3Dslsbrc%7Csn%3D24%7Chk%3Dd5c255a91c85f2ead294c615f20fabc71694e34d&jaehuid=200001169";
                                case "display": return "https://www.coupang.com/vp/products/7720675222?itemId=21113151916&vendorItemId=88175006223&src=1139000&spec=10799999&addtag=400&ctag=7720675222&lptag=AF8665261&itime=20241204052338&pageType=PRODUCT&pageValue=7720675222&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204052338&redirect=landing&traceid=&mcid=48da865b27c64844b9f47ce03386f6fe&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=NGNjMGQyYj";
                                
                            }    
                    }
                case "150":
                    switch(data.maker){
                        case "domestic":
                            switch(data.priority){
                                case "performance": return "https://www.coupang.com/vp/products/8360764820?itemId=24161092993&vendorItemId=91179673905&src=1139000&spec=10799999&addtag=400&ctag=8360764820&lptag=AF8665261&itime=20241204052725&pageType=PRODUCT&pageValue=8360764820&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204052725&redirect=landing&traceid=&mcid=f92b971091bc4bca9c441e5d45953586&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=ZWJkMjQxM2";
                                case "lightweight": return "https://www.coupang.com/vp/products/7662564392?itemId=22918242442&vendorItemId=91256762571&src=1139000&spec=10799999&addtag=400&ctag=7662564392&lptag=AF8665261&itime=20241204052808&pageType=PRODUCT&pageValue=7662564392&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204052808&redirect=landing&traceid=&mcid=69c16d9e7a5f4506b11225c9ca5f2fe2&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MmNiZTY1MD";
                                case "display": return "https://www.coupang.com/vp/products/7662564392?itemId=22918242442&vendorItemId=91256762571&src=1139000&spec=10799999&addtag=400&ctag=7662564392&lptag=AF8665261&itime=20241204052808&pageType=PRODUCT&pageValue=7662564392&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204052808&redirect=landing&traceid=&mcid=69c16d9e7a5f4506b11225c9ca5f2fe2&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MmNiZTY1MD";
                            }
                        case "foreign":   
                            switch(data.priority){
                                case "performance": return "https://smartstore.naver.com/siscompany2/products/10739992105?NaPm=ct%3Dm48wxgsw%7Cci%3Da2d314cb8e24591a4220455eb02a2ecac0fc070d%7Ctr%3Dslsbrc%7Csn%3D8016034%7Chk%3D11d4475cbce8f775da5f268e6df42b40c7559fd9&nl-query=%EB%A0%88%EB%85%B8%EB%B2%84+LEGION+5i+15IRX9+i7+4060";
                                case "lightweight": return "https://www.coupang.com/vp/products/8123591797?itemId=23052942007&vendorItemId=90086602360&src=1139000&spec=10799999&addtag=400&ctag=8123591797&lptag=AF8665261&itime=20241204053026&pageType=PRODUCT&pageValue=8123591797&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053026&redirect=landing&traceid=&mcid=6f0811989be842adba5c5293067d1433&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=ZmIwYTI2MD";
                                case "display": return "https://www.coupang.com/vp/products/8326895029?itemId=24038363247&vendorItemId=91058643045&src=1139000&spec=10799999&addtag=400&ctag=8326895029&lptag=AF8665261&itime=20241204053000&pageType=PRODUCT&pageValue=8326895029&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053000&redirect=landing&traceid=&mcid=dbcbd1d100454798a46b0c6178936d1c&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=YTAxMDA2ZG";
                            
                            }
                        case "no-preference":
                            switch(data.priority){
                                case "performance": return "https://smartstore.naver.com/siscompany2/products/10739992105?NaPm=ct%3Dm48wrq0g%7Cci%3Ddc12b591a9e91f77f43a9eb80f7ab732810a9967%7Ctr%3Dslsbrc%7Csn%3D8016034%7Chk%3D5ea86fa3455eb111e9319a659190c5ca38cfccd3&nl-query=%EB%A0%88%EB%85%B8%EB%B2%84+LEGION+5i+15IRX9+i7+4060";
                                case "lightweight": return "https://smartstore.naver.com/first9s/products/9767329508?nl-query=LG%EC%A0%84%EC%9E%90+2024+%EA%B7%B8%EB%9E%A8+%ED%94%84%EB%A1%9C16+16Z90SP-GA5HK&nl-ts-pid=i09pRlqVOsVssKlijERssssstZ0-421666&NaPm=ct%3Dm48wsrtk%7Cci%3D45ea73d39c31f7766542f12c193a1ba822c78579%7Ctr%3Dsls%7Csn%3D1748096%7Chk%3D365aaf2747b2af7fde8ef666c29e45af30961ded";
                                case "display": return "https://www.lotteon.com/p/product/LO2381749649?sitmNo=LO2381749649_2381749650&ch_no=100065&ch_dtl_no=1000030&entryPoint=pcs&dp_infw_cd=CHT&NaPm=ct%3Dm48wtha8%7Cci%3D63f1e8b95c7c542e32f6d9d4cce3849ba2af0382%7Ctr%3Dsls%7Csn%3D1243359%7Chk%3D21f035cf3a689c59f634e0da218c921334246e42";

                            }    
                    }
                    
                case "150 or more":
                    switch(data.maker){
                        case "domestic":
                            switch(data.priority){
                                case "performance": return "https://www.coupang.com/vp/products/8448208536?itemId=24439534244&vendorItemId=91503410993&src=1139000&spec=10799999&addtag=400&ctag=8448208536&lptag=AF8665261&itime=20241204053256&pageType=PRODUCT&pageValue=8448208536&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053256&redirect=landing&traceid=&mcid=3a114182597a4f4294891625271e7e85&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MTE2Yzg5OT";
                                case "lightweight": return "https://www.coupang.com/vp/products/7430382927?itemId=18395905505&vendorItemId=85946869424&src=1139000&spec=10799999&addtag=400&ctag=7430382927&lptag=AF8665261&itime=20241204053433&pageType=PRODUCT&pageValue=7430382927&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053433&redirect=landing&traceid=&mcid=ce0d3c8bf64b46ebb8a33c3ac25f3e6d&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=ZjI4YzIyOD";
                                case "display": return "https://www.hmall.com/pd/pda/itemPtc?ReferCode=605&slitmCd=2223164319&utm_source=nosearch&utm_medium=cps_pcs&utm_campaign=sale&service_id=estimatedn&TcCode=0000004505&openNativeBrowser=true";

                            }
                        case "foreign":   
                            switch(data.priority){
                                case "performance": return "https://www.coupang.com/vp/products/8065234662?itemId=22681095513&vendorItemId=89717245956&src=1139000&spec=10799999&addtag=400&ctag=8065234662&lptag=AF8665261&itime=20241204053117&pageType=PRODUCT&pageValue=8065234662&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053117&redirect=landing&traceid=&mcid=da0fe5f017da4035ad186ed7063e1b5b&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MGYwNjU3ZW";
                                case "lightweight": return "https://www.e-himart.co.kr/app/goods/goodsDetail?goodsNo=0021464869&utm_source=nosearch&utm_medium=CPS&utm_campaign=nosearch&fromShop=nosearch&referrer=nosearch_app&openNativeBrowser=true";
                                case "display": return "https://www.e-himart.co.kr/app/goods/goodsDetail?goodsNo=0021408907&utm_source=nosearch&utm_medium=CPS&utm_campaign=nosearch&fromShop=nosearch&referrer=nosearch_app&openNativeBrowser=true";
                            
                            }
                        case "no-preference":
                            switch(data.priority){
                                case "performance": return "https://www.coupang.com/vp/products/8340010597?itemId=24084663968&vendorItemId=91104195853&src=1139000&spec=10799999&addtag=400&ctag=8340010597&lptag=AF8665261&itime=20241204053459&pageType=PRODUCT&pageValue=8340010597&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053459&redirect=landing&traceid=&mcid=060d8284846f4b6cb45c62b0b2aca8d0&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=NDMyOWQwZD";
                                case "lightweight": return "https://www.hmall.com/pd/pda/itemPtc?ReferCode=605&slitmCd=2223164319&utm_source=nosearch&utm_medium=cps_pcs&utm_campaign=sale&service_id=estimatedn&TcCode=0000004505&openNativeBrowser=true";
                                case "display": return "https://www.coupang.com/vp/products/7744436213?itemId=21131253902&vendorItemId=88192978728&src=1139000&spec=10799999&addtag=400&ctag=7744436213&lptag=AF8665261&itime=20241204053549&pageType=PRODUCT&pageValue=7744436213&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053549&redirect=landing&traceid=&mcid=1dbf69fd8bbe4997a5d335f494e9d253&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=Nzg5ODgxMT";

                            }    
                    }


                default:
                    // 기본 URL
                    return "result/general.html";
            }    
        }

        function tabletdetermineURL(data) {
            switch(data.price){
                case "100 or less": 
                    switch(data.maker){
                        case "domestic":
                            switch(data.priority){
                                case "performance": return "http://itempage3.auction.co.kr/DetailView.aspx?itemno=E275913706";
                                case "lightweight": return "https://item.gmarket.co.kr/Item?goodscode=3666676407&lcd=100000002&NaPm=ct%3Dm48wft00%7Cci%3Db10bd0c57a770efeb58dc876b1d6839f2aae26fd%7Ctr%3Dslsbrc%7Csn%3D24%7Chk%3Dc091bf22ae6d7e6e6c37955c9f2b0ef9a9682191&jaehuid=200001169";
                                case "display": return "https://smartstore.naver.com/first9s/products/8985667524?nl-query=LG%EC%A0%84%EC%9E%90+%EC%9A%B8%ED%8A%B8%EB%9D%BCPC+%EC%97%A3%EC%A7%80+16U70R-GA56K&nl-ts-pid=i09FbwpzLi0ssmDtGANssssssk0-143972&NaPm=ct%3Dm48wgomw%7Cci%3Df568813ef3c909b70cd0cb11c5f877dec9bc18a4%7Ctr%3Dsls%7Csn%3D1748096%7Chk%3D84a519f78f8ba0a792cc1d7a939271b204657b4d";

                            }
                        case "foreign":   
                            switch(data.priority){
                                case "performance": return "https://www.hmall.com/pd/pda/itemPtc?ReferCode=605&slitmCd=2217784443&utm_source=nosearch&utm_medium=cps_pcs&utm_campaign=sale&service_id=estimatedn&TcCode=0000004505&openNativeBrowser=true";
                                case "lightweight": return "https://www.coupang.com/vp/products/7842749060?itemId=21354421906&vendorItemId=88412025924&src=1139000&spec=10799999&addtag=400&ctag=7842749060&lptag=AF8665261&itime=20241204052148&pageType=PRODUCT&pageValue=7842749060&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204052148&redirect=landing&traceid=&mcid=de318cee6e844d5b85d988c43b07c214&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MDZhNTZjZm";
                                case "display": return "https://smartstore.naver.com/noteinside/products/9045489263?NaPm=ct%3Dm48wocvc%7Cci%3Dd5027066b024a73a2fee6cd740fd46446fb3cb0f%7Ctr%3Dslsl%7Csn%3D2725582%7Chk%3D825c2a8ec29eb3dccfed800f9a6476a11fc4f470&nl-au=edbdaf804cfb4b6f8a580a9e2aa92051&nl-query=ASUS+%EB%B9%84%EB%B3%B4%EB%B6%81+16X+OLED+M3604YA-L2030";
                             
                            }
                        case "no-preference":
                            switch(data.priority){
                                case "performance": return "https://www.hmall.com/pd/pda/itemPtc?ReferCode=605&slitmCd=2217784443&utm_source=nosearch&utm_medium=cps_pcs&utm_campaign=sale&service_id=estimatedn&TcCode=0000004505&openNativeBrowser=true";
                                case "lightweight": return "https://item.gmarket.co.kr/Item?goodscode=3666676407&lcd=100000002&NaPm=ct%3Dm48wqqio%7Cci%3D486a069cba62ad36a2e8c3551879ab0ef978e643%7Ctr%3Dslsbrc%7Csn%3D24%7Chk%3Dd5c255a91c85f2ead294c615f20fabc71694e34d&jaehuid=200001169";
                                case "display": return "https://www.coupang.com/vp/products/7720675222?itemId=21113151916&vendorItemId=88175006223&src=1139000&spec=10799999&addtag=400&ctag=7720675222&lptag=AF8665261&itime=20241204052338&pageType=PRODUCT&pageValue=7720675222&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204052338&redirect=landing&traceid=&mcid=48da865b27c64844b9f47ce03386f6fe&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=NGNjMGQyYj";
                                
                            }    
                    }
                case "150":
                    switch(data.maker){
                        case "domestic":
                            switch(data.priority){
                                case "performance": return "https://www.coupang.com/vp/products/8360764820?itemId=24161092993&vendorItemId=91179673905&src=1139000&spec=10799999&addtag=400&ctag=8360764820&lptag=AF8665261&itime=20241204052725&pageType=PRODUCT&pageValue=8360764820&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204052725&redirect=landing&traceid=&mcid=f92b971091bc4bca9c441e5d45953586&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=ZWJkMjQxM2";
                                case "lightweight": return "https://www.coupang.com/vp/products/7662564392?itemId=22918242442&vendorItemId=91256762571&src=1139000&spec=10799999&addtag=400&ctag=7662564392&lptag=AF8665261&itime=20241204052808&pageType=PRODUCT&pageValue=7662564392&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204052808&redirect=landing&traceid=&mcid=69c16d9e7a5f4506b11225c9ca5f2fe2&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MmNiZTY1MD";
                                case "display": return "https://www.coupang.com/vp/products/7662564392?itemId=22918242442&vendorItemId=91256762571&src=1139000&spec=10799999&addtag=400&ctag=7662564392&lptag=AF8665261&itime=20241204052808&pageType=PRODUCT&pageValue=7662564392&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204052808&redirect=landing&traceid=&mcid=69c16d9e7a5f4506b11225c9ca5f2fe2&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MmNiZTY1MD";
                            }
                        case "foreign":   
                            switch(data.priority){
                                case "performance": return "https://smartstore.naver.com/siscompany2/products/10739992105?NaPm=ct%3Dm48wxgsw%7Cci%3Da2d314cb8e24591a4220455eb02a2ecac0fc070d%7Ctr%3Dslsbrc%7Csn%3D8016034%7Chk%3D11d4475cbce8f775da5f268e6df42b40c7559fd9&nl-query=%EB%A0%88%EB%85%B8%EB%B2%84+LEGION+5i+15IRX9+i7+4060";
                                case "lightweight": return "https://www.coupang.com/vp/products/8123591797?itemId=23052942007&vendorItemId=90086602360&src=1139000&spec=10799999&addtag=400&ctag=8123591797&lptag=AF8665261&itime=20241204053026&pageType=PRODUCT&pageValue=8123591797&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053026&redirect=landing&traceid=&mcid=6f0811989be842adba5c5293067d1433&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=ZmIwYTI2MD";
                                case "display": return "https://www.coupang.com/vp/products/8326895029?itemId=24038363247&vendorItemId=91058643045&src=1139000&spec=10799999&addtag=400&ctag=8326895029&lptag=AF8665261&itime=20241204053000&pageType=PRODUCT&pageValue=8326895029&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053000&redirect=landing&traceid=&mcid=dbcbd1d100454798a46b0c6178936d1c&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=YTAxMDA2ZG";
                            
                            }
                        case "no-preference":
                            switch(data.priority){
                                case "performance": return "https://smartstore.naver.com/siscompany2/products/10739992105?NaPm=ct%3Dm48wrq0g%7Cci%3Ddc12b591a9e91f77f43a9eb80f7ab732810a9967%7Ctr%3Dslsbrc%7Csn%3D8016034%7Chk%3D5ea86fa3455eb111e9319a659190c5ca38cfccd3&nl-query=%EB%A0%88%EB%85%B8%EB%B2%84+LEGION+5i+15IRX9+i7+4060";
                                case "lightweight": return "https://smartstore.naver.com/first9s/products/9767329508?nl-query=LG%EC%A0%84%EC%9E%90+2024+%EA%B7%B8%EB%9E%A8+%ED%94%84%EB%A1%9C16+16Z90SP-GA5HK&nl-ts-pid=i09pRlqVOsVssKlijERssssstZ0-421666&NaPm=ct%3Dm48wsrtk%7Cci%3D45ea73d39c31f7766542f12c193a1ba822c78579%7Ctr%3Dsls%7Csn%3D1748096%7Chk%3D365aaf2747b2af7fde8ef666c29e45af30961ded";
                                case "display": return "https://www.lotteon.com/p/product/LO2381749649?sitmNo=LO2381749649_2381749650&ch_no=100065&ch_dtl_no=1000030&entryPoint=pcs&dp_infw_cd=CHT&NaPm=ct%3Dm48wtha8%7Cci%3D63f1e8b95c7c542e32f6d9d4cce3849ba2af0382%7Ctr%3Dsls%7Csn%3D1243359%7Chk%3D21f035cf3a689c59f634e0da218c921334246e42";

                            }    
                    }
                    
                case "150 or more":
                    switch(data.maker){
                        case "domestic":
                            switch(data.priority){
                                case "performance": return "https://www.coupang.com/vp/products/8448208536?itemId=24439534244&vendorItemId=91503410993&src=1139000&spec=10799999&addtag=400&ctag=8448208536&lptag=AF8665261&itime=20241204053256&pageType=PRODUCT&pageValue=8448208536&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053256&redirect=landing&traceid=&mcid=3a114182597a4f4294891625271e7e85&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MTE2Yzg5OT";
                                case "lightweight": return "https://www.coupang.com/vp/products/7430382927?itemId=18395905505&vendorItemId=85946869424&src=1139000&spec=10799999&addtag=400&ctag=7430382927&lptag=AF8665261&itime=20241204053433&pageType=PRODUCT&pageValue=7430382927&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053433&redirect=landing&traceid=&mcid=ce0d3c8bf64b46ebb8a33c3ac25f3e6d&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=ZjI4YzIyOD";
                                case "display": return "https://www.hmall.com/pd/pda/itemPtc?ReferCode=605&slitmCd=2223164319&utm_source=nosearch&utm_medium=cps_pcs&utm_campaign=sale&service_id=estimatedn&TcCode=0000004505&openNativeBrowser=true";

                            }
                        case "foreign":   
                            switch(data.priority){
                                case "performance": return "https://www.coupang.com/vp/products/8065234662?itemId=22681095513&vendorItemId=89717245956&src=1139000&spec=10799999&addtag=400&ctag=8065234662&lptag=AF8665261&itime=20241204053117&pageType=PRODUCT&pageValue=8065234662&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053117&redirect=landing&traceid=&mcid=da0fe5f017da4035ad186ed7063e1b5b&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=MGYwNjU3ZW";
                                case "lightweight": return "https://www.e-himart.co.kr/app/goods/goodsDetail?goodsNo=0021464869&utm_source=nosearch&utm_medium=CPS&utm_campaign=nosearch&fromShop=nosearch&referrer=nosearch_app&openNativeBrowser=true";
                                case "display": return "https://www.e-himart.co.kr/app/goods/goodsDetail?goodsNo=0021408907&utm_source=nosearch&utm_medium=CPS&utm_campaign=nosearch&fromShop=nosearch&referrer=nosearch_app&openNativeBrowser=true";
                            
                            }
                        case "no-preference":
                            switch(data.priority){
                                case "performance": return "https://www.coupang.com/vp/products/8340010597?itemId=24084663968&vendorItemId=91104195853&src=1139000&spec=10799999&addtag=400&ctag=8340010597&lptag=AF8665261&itime=20241204053459&pageType=PRODUCT&pageValue=8340010597&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053459&redirect=landing&traceid=&mcid=060d8284846f4b6cb45c62b0b2aca8d0&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=NDMyOWQwZD";
                                case "lightweight": return "https://www.hmall.com/pd/pda/itemPtc?ReferCode=605&slitmCd=2223164319&utm_source=nosearch&utm_medium=cps_pcs&utm_campaign=sale&service_id=estimatedn&TcCode=0000004505&openNativeBrowser=true";
                                case "display": return "https://www.coupang.com/vp/products/7744436213?itemId=21131253902&vendorItemId=88192978728&src=1139000&spec=10799999&addtag=400&ctag=7744436213&lptag=AF8665261&itime=20241204053549&pageType=PRODUCT&pageValue=7744436213&wPcid=17144800145369774627960&wRef=nosearch.com&wTime=20241204053549&redirect=landing&traceid=&mcid=1dbf69fd8bbe4997a5d335f494e9d253&placementid=&clickBeacon=&campaignid=&puidType=&contentcategory=&imgsize=&tsource=&pageid=&deviceid=&token=&contenttype=&subid=variant3&impressionid=&campaigntype=&puid=&requestid=&contentkeyword=&subparam=Nzg5ODgxMT";

                            }    
                    }


                default:
                    // 기본 URL
                    return "result/general.html";
            }    
        }
