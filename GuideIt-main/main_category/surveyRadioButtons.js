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

        function submitSurvey() {
            const selected = document.querySelector('input[name="priority"]:checked');
            if (!selected) {
                alert("마지막 질문의 옵션을 선택해주세요!");
                return;
            }
            surveyData["priority"] = selected.value; // 마지막 질문 데이터 저장

            // 설문 데이터로 URL 결정
            const url = determineURL(surveyData);
            window.location.href = url; // 해당 URL로 이동
        }

        function determineURL(data) {
            switch(data.purpose){ //노트북 용도
                case "low": 
                    switch(data.price){ //가격대
                        case "100 or less":
                            switch(data.maker){ //제조사 > 하나 추가함(해외)
                                case "domestic":    
                                    switch(data.monitor){ //모니터 크기     
                                        case "14":
                                            switch(data.priority){      
                                                case "performance": return "result/one.html";  //문서작업,학습용 + 100만원 이하 + 국내 대기업 + 14인치 이하 + 성능
                                                case "lightweight": return "result/two.html";   //문서작업,학습용 + 100만원 이하 + 국내 대기업 + 14인치 이하 + 가벼운
                                                case "display": return "result/three.html"; //문서작업,학습용 + 100만원 이하 + 국내 대기업 + 14인치 이하 + 화질
                                            }
                                            // Ctrl + Shift + L : 단어를 하나 선택하고, 누르면 같은 단어가 모두 선택됩니다. 선택 후 수정하면 모두 수정됩니다.
                                            // Ctrl + H : 바꾸기 창을 엽니다.
                                            break;
                                        case "15":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "no-preference":  
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }  
                                            break;
                                    }
                                    break;
                                case "no-preference":
                                    switch(data.monitor){ //모니터 크기
                                        case "14":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "15":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "no-preference":    
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                    }
                                    break;   
                            }
                            break;

                        case "150":
                            switch(data.maker){ //제조사
                                case "domestic":
                                    switch(data.monitor){ //모니터 크기
                                        case "14":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "15":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "no-preference":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                    }
                                    break;
                                case "no-preference":
                                    switch(data.monitor){ //모니터 크기
                                        case "14":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "15":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "no-preference":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                    }
                                    break;   
                            }
                            break;

                        case "150 or more":
                            switch(data.maker){ //제조사
                                case "domestic":
                                    switch(data.monitor){ //모니터 크기
                                        case "14":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "15":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "no-preference":    
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                    }
                                    break;
                                case "no-preference":
                                    switch(data.monitor){ //모니터 크기
                                        case "14":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "15":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "no-preference":    
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                    }
                                    break;   
                            }
                            break;
                    }
                    break;


                case mid:
                    switch(data.price){ //가격대
                        case "100 or less":
                            switch(data.maker){ //제조사
                                case "domestic":
                                    switch(data.monitor){ //모니터 크기
                                        case "14":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "15":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "no-preference":   
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                    }
                                    break;
                                case "no-preference":
                                    switch(data.monitor){ //모니터 크기
                                        case "14":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "15":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "no-preference":    
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                    }
                                    break;   
                            }
                            break;

                        case "150":
                            switch(data.maker){ //제조사
                                case "domestic":
                                    switch(data.monitor){ //모니터 크기
                                        case "14":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "15":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "no-preference":   
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                    }
                                    break;
                                case "no-preference":
                                    switch(data.monitor){ //모니터 크기
                                        case "14":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "15":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "no-preference":    
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                    }
                                    break;   
                            }
                            break;

                        case "150 or more":
                            switch(data.maker){ //제조사
                                case "domestic":
                                    switch(data.monitor){ //모니터 크기
                                        case "14":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "15":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "no-preference":   
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            } 
                                            break;
                                    }
                                    break;
                                case "no-preference":
                                    switch(data.monitor){ //모니터 크기
                                        case "14":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "15":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "no-preference": 
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                    }
                                    break;   
                            }
                            break;
                    }
                    break;


                case high:
                    switch(data.price){ //가격대
                        case "100 or less": 
                            switch(data.maker){ //제조사
                                case "domestic": 
                                    switch(data.monitor){ //모니터 크기
                                        case "14":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "15":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "no-preference": 
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                    }
                                    break;
                                case "no-preference":
                                    switch(data.monitor){ //모니터 크기
                                        case "14":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "15":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "no-preference":   
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                    }
                                    break;   
                            }
                            break;

                        case "150":
                            switch(data.maker){ //제조사
                                case "domestic":
                                    switch(data.monitor){ //모니터 크기
                                        case "14":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "15":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "no-preference":  
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }  
                                            break;
                                    }
                                    break;
                                case "no-preference":
                                    switch(data.monitor){ //모니터 크기
                                        case "14":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "15":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "no-preference":    
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                    }
                                    break;   
                            }
                            break;

                        case "150 or more":
                            switch(data.maker){ //제조사
                                case "domestic":
                                    switch(data.monitor){ //모니터 크기
                                        case "14":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "15":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html";
                                            }
                                            break;
                                        case "no-preference":    
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                    }
                                    break;
                                case "no-preference":
                                    switch(data.monitor){ //모니터 크기
                                        case "14":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "15":
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "result/three.html"; 
                                            }
                                            break;
                                        case "no-preference":    
                                            switch(data.priority){
                                                case "performance": return "result/one.html";
                                                case "lightweight": return "result/two.html"; 
                                                case "display": return "resut/three.html"; 
                                            }
                                            break;
                                    }
                                    break;   
                            }
                            break;
                    }
                    break;

                default:
                    // 기본 URL
                    return "result/general.html";     
            
                }
            
        }