# <프로젝트 구조>

이 프로젝트는 세 가지 주요 컴포넌트로 구성되어 있습니다.

1. App 컴포넌트(App.jsx)

   - 전체 애플리케이션을 렌더링 하는 메인 컴포넌트입니다.
   - 국가와 메달 수에 대한 리스트 관리를 합니다.
   - MedalForm과 MedalList 컴포넌트를 렌더링합니다.

2. MedalForm 컴포넌트(MedalForm.jsx)

   - 국가 메달 정보를 추가하거나 업데이트하기 위한 입력 폼을 처리합니다.
   - 폼 입력(국가명, 금메달, 은메달, 동메달)에 대한 상태를 관리합니다.
   - 새로운 국가를 추가하거나 기존 국가 정보를 업데이트 하는 기능을 제공합니다.

3. MedalList 컴포넌트(MedaListe.jsx)

   - 국가 목록과 메달 수를 테이블 형식으로 표시합니다.
   - 국가를 금메달 수에 따라 내림차순으로 정렬합니다.
   - 목록에서 국가별 메달리스트를 삭제하는 기능을 제공합니다.

4. Input 컴포넌트(Input.jsx)
   - MedalForm의 자식 컴포넌트로, 개별 입력 필드를 렌더링합니다.
   - 각 입력 필드(국가명, 금메달, 은메달, 동메달)에 대한 UI와 상태 관리를 담당합니다.
   - 사용자가 입력을 처리하고 부모컴포넌트(MedalForm)에 변경 사항을 전달합니다.

## <컴포넌트 계층 구조>

```
App
├── MedalForm
│   └── Input
└── MedalList
```
