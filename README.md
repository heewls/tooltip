React + TypeScript + Vite

css : styled components

-   props 통해 동적으로 스타일링 하기 위해 사용

컴포넌트

-   기본 tooltip : Normal
-   overflow scroll 상황에서도 보이는 tooltip : Scroll
-   delay & hover tooltip : Options
-   tooltip 안에 다양한 data : VariousContent
-   button으로 tooltip disable state setting : Disable
-   툴팁 style custom : CustomTooltip

tooltip component props

-   direction : "left", "right" ,"top", "bottom" 등 tooltip 방향 설정 가능(default value : "bottom")
-   enterDelay : tooltip 부모 요소에 onMouseEnter되고 enterDelay가 있으면 enterDelay \* 1000ms 후 tooltip 보여지게 구현
-   leaveDelay:tooltip 부모 요소에 onMouseLeave되면 leaveDelay \* 1000ms 후 tooltip 사라지게 구현
-   content, children : 다양한 형태의 데이터 가능하도록 구현(content 값이 string으로 들어오면 tooltip arrow가 안보이는 현상으로 content의 type이 string이면 그 값이 div tag 안에 들어가 보여지도록 구현)
-   style : 툴팁 스타일 커스텀 가능하도록 구현
-   backgroundColor : tooltip arrow 컬러는 style로 바뀌지 않아 props로 배경색 바꿀 수 있도록 구현
-   disabled : disabled가 true면 tooltip 안 보이게 구현(default value : false)
-   hover : hover가 true면 tooltip에 mouseEnter 시 사라지지 않게 구현(default value : false)

tooltip direction

-   parentNode 이용하여 tooltip의 부모 노드에 접근하고 getBoundingClientRect를 통해 부모 요소의 크기와 위치 가져온 후 tooltip의 크기와 위치를 이용해 원하는 top, left 설정 후 setPosition에 담아 tooltip inline style에 적용
-   scroll 시 tooltip도 같이 움직이는 현상 해결하기 위해 scrollTop과 scrollLeft 이용
-   초기 렌더링됐을 때 visible이 true이면 calculateDirection 함수 호출하고 이벤트 리스너 통해 scroll 발생하면 calculateDirection 호출하여 위치 업데이트, direction, visible, calculateDirection 값이 변경되면 기존 이벤트 리스너 제거
