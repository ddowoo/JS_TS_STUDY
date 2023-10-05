# 자료구조 (Stack, Queue, Deque)

### 1. Stack

- 특징
    
    한쪽 끝에서만 자료를 넣고 빼는 작업이 이루어진다.
    
    **LIFO (Last In First Out)**방식
    
    스택의 가장 **최근 자료 위치를 top**이라 한다
    
    top을 통해 접근하기 때문에 접근, 삽입, 삭제가 빠르지만 탐색이 불가능 하다
    

- 시간 복잡도
    
    top 위치의 데이터에 바로 접근이 가능해 삽입, 삭제 시간 복잡도는 O(1)
    
- 활용
    1. 재귀
    2. DFS
    3. 역추적 작업
    4. 과호검사, 후위 연산법, 문자열 역순 출력 등

![https://velog.velcdn.com/images%2Fnnnyeong%2Fpost%2F9a57f718-bdc2-4375-9760-f5c8ce12fb0f%2Fimage.png](https://velog.velcdn.com/images%2Fnnnyeong%2Fpost%2F9a57f718-bdc2-4375-9760-f5c8ce12fb0f%2Fimage.png)

### 2. Queue

- 특징
    
    양쪽 끝에서 각각 삽입과 삭제가 이루어진다
    
    **FIFO (First In First Out)**
    
    데이터 **삽입** 되는 곳을 (**rear**) , **제거** 되는 곳을 (**front**)
    
- 시간 복잡도
    
    front, rear 위치의 데이터에 바로 접근이 가능해 삽입, 삭제 시간 복잡도는 O(1)
    
- 활용
    1. 데이터를 입력순으로 처리 해야 할때
    2. BFS
    3. 프로세스 관리
    4. 대기 순서 관리

![https://velog.velcdn.com/images%2Fnnnyeong%2Fpost%2Fc412c1f6-9cf2-4fe2-b1c6-b166e2a58c99%2Fimage.png](https://velog.velcdn.com/images%2Fnnnyeong%2Fpost%2Fc412c1f6-9cf2-4fe2-b1c6-b166e2a58c99%2Fimage.png)

### 3. Deque

- 특징
    
    양쪽 front, rear에서 삽입 삭제가 모두 가능한 큐
    
    중간에 데이터가 삽입될 때 다른 요소들을 앞, 뒤로 밀 수 있다
    
- 시간 복잡도
    
    삽입 삭제 연산은 **O(1)**의 시간 복잡도를 가지고, 스택/큐와 달리 index 를 통해 요소들에 탐색이 가능하므로 이 역시 **O(1)**
    

![https://choiiis.github.io/assets/images/posts_img/data-structure-2/data-structure-2-3.png](https://choiiis.github.io/assets/images/posts_img/data-structure-2/data-structure-2-3.png)
