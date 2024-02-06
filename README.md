# 🐻‍❄️ 먼작귀 편지함

React를 이용한 먼작귀 캐릭터 팬레터 사이트 만들기 [ [먼작귀 편지함](https://tiny-cute-letterbox.vercel.app/) ]


<br>


### 🔽 **프로젝트 소개**

**프로젝트명** : 먼작귀 편지함

**개발 기간** : 2024.01.29 ~ 2024.02.05

**프로젝트 소개** : 먼작귀 캐릭터에게 편지를 보내고 편지함을 조회 및 수정, 삭제할 수 있는 팬레터 사이트 입니다.



<br>

### 🔽  **개발 환경**

- **Environment :** vscode, github
- **Development :** React, Javascript, HTML, CSS
- **Library :** redux, router, styled-components, uuid
- **Design :** Figma
- **Deployment:** Vercel



<br>


### **🔽 시작 가이드**

**1. git clone**

```bash
$ git clone https://github.com/seopport/TinyCuteLetterbox.git
$ cd TinyCuteLetterbox
```

**2. yarn start**

```bash
npm i
yarn start
```



<br>

### **🔽 와이어프레임**

| Home Page                                                    | details Page                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![image-20240206100707847](https://github.com/seopport/TinyCuteLetterbox/assets/103973797/22bb53ce-293e-4ddb-9230-3deb236f9447) | ![image-20240206100736415](https://github.com/seopport/TinyCuteLetterbox/assets/103973797/1fa48a49-ca83-4dcc-b047-ea6c4394979d) |
| ![image-20240206100836019](https://github.com/seopport/TinyCuteLetterbox/assets/103973797/00ceeda2-c4f6-430f-ab17-3b4011fdda28) | ![image-20240206100846324](https://github.com/seopport/TinyCuteLetterbox/assets/103973797/f83be2a4-18b2-473d-b5d7-7984d02cd0ca) |



<br>

### 🔽 화면 구성 및 기능

### 1. 메인 페이지

| ![Honeycam 2024-02-06 10-17-27](https://github.com/seopport/TinyCuteLetterbox/assets/103973797/7e0c39fb-fb74-4058-9788-0f8e0781dce1) |
| :----------------------------------------------------------: |

##### 1.1. 편지 보내기

+ 드롭다운 박스로 편지를 보낼 캐릭터를 선택합니다.
  + 선택한 캐릭터에 따라 아래 편지함에서 해당 캐릭터의 편지함을 조회합니다.

+ 편지 내용과 작성자를 입력하고 편지를 보냅니다.
  + 편지 내용과 작성자 둘 중 하나라도 입력하지 않으면 알림창을 띄웁니다.
+ 편지를 보내면 편지함에 편지가 추가됩니다.
+ 편지 내용이 일정 글자 수를 넘어가면 점으로 요약되어 표시됩니다.

<br>

### 2. 상세 페이지

| ![Honeycam 2024-02-06 10-19-50](https://github.com/seopport/TinyCuteLetterbox/assets/103973797/114535ca-ca81-4651-b1b3-c81c1a438aa4) |
| ------------------------------------------------------------ |

##### 2.1. 편지 상세 조회 및 수정

+ 메인 페이지에서 추가된 편지의 [상세보기]를 누르면 편지의 상세내용을 볼 수 있습니다.
+ 편지의 내용을 수정할 수 있습니다.
  + 수정 버튼을 누르면 완료, 취소 버튼이 나타납니다.
  + 취소 버튼을 눌렀을 때 수정 내역이 없으면 바로 수정이 취소되고, 수정 내역이 있으면 수정 취소를 확인하는 컨펌창을 띄워 사용자의 의사를 한번 더 확인하게 합니다.
  + 수정 내역이 없으면 완료 버튼을 누를 시 수정 사항이 없음을 알리고 수정되지 않습니다. 수정 내역이 있으면 해당 내용으로 수정이 완료됩니다.

<br>

| ![Honeycam 2024-02-06 10-21-29](https://github.com/seopport/TinyCuteLetterbox/assets/103973797/67e6b48a-c0a9-45e8-9505-1e615e0a51f9) |
| ------------------------------------------------------------ |

##### 2.2. 편지 삭제

+ 삭제 버튼을 통해 편지를 삭제할 수 있습니다.
+ 편지를 삭제하면 알림창을 띄우고 메인 페이지로 이동합니다.

<br>

🚦 트러블 슈팅
