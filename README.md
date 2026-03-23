# React + Vite

## React Study Plan App
**리액트**로 만든 *스터디 플랜 앱*입니다. filter/sort/map/find 메소드로 데이터를 정렬하고, 조건에 맞는 필터기능을 포함하고 있습니다.

아이템을 js에 저장하고 `fetch 구문`으로 목록처럼 보여지도록 했습니다.

### 설치된 라이브러리 
- react-router-dom -> 페이지 연결
- react-swiper -> 스와이퍼
- react-tabs -> 탭기능
- react-style-components -> 스타일 컴포넌트

### 과정 추가 버튼 함수
```
function addTodo() {

    if (inputValue.trim === '') return

    const newTodo = {
      id: Date.now(), //현재 시간(ms)을 숫자로 반환
      text: inputValue
    }

    //spread = [1,2] -> [1,2,3,4] -> 기존에서 더해가는거
    setTodos([...todos, newTodo])
    setInputValue('')
  }

  ```

  #### 배포
  > github의 정적인 배포 환경에서 리액트의 동적환경이 충돌되는 문제로 배포과정의 불필요한 코드들을 추가하는 부분은 vercel로 배포하면서 해결을 했다

  ---
#### 썸네일  클릭하면 링크

##### 이미지를 크릭하면 사이트로 이동합니다.
![studyplan App](public/images/syudy-plan-thumbnail.png)
 배포된 주소는 [studyplan App](https://react-studyplan-app.vercel.app/)입니다.

