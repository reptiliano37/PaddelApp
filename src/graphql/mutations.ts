/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      cognitoID
      username
      name
      email
      typeUser
      createdAt
      updatedAt
      trainings {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      cognitoID
      username
      name
      email
      typeUser
      createdAt
      updatedAt
      trainings {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      cognitoID
      username
      name
      email
      typeUser
      createdAt
      updatedAt
      trainings {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      cognitoID
      username
      name
      email
      typeUser
      createdAt
      updatedAt
      trainings {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      cognitoID
      username
      name
      email
      typeUser
      createdAt
      updatedAt
      trainings {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      cognitoID
      username
      name
      email
      typeUser
      createdAt
      updatedAt
      trainings {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const createPlayerTraining = /* GraphQL */ `
  mutation CreatePlayerTraining(
    $input: CreatePlayerTrainingInput!
    $condition: ModelPlayerTrainingConditionInput
  ) {
    createPlayerTraining(input: $input, condition: $condition) {
      id
      trainingID
      createdAt
      playerUsername
      userUsername
      players
      updatedAt
      user {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      player {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      owners
      training {
        id
        status
        trainer
        player
        owners
        winner
        hit
        createdAt
        updatedAt
        users {
          nextToken
        }
      }
    }
  }
`;
export const updatePlayerTraining = /* GraphQL */ `
  mutation UpdatePlayerTraining(
    $input: UpdatePlayerTrainingInput!
    $condition: ModelPlayerTrainingConditionInput
  ) {
    updatePlayerTraining(input: $input, condition: $condition) {
      id
      trainingID
      createdAt
      playerUsername
      userUsername
      players
      updatedAt
      user {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      player {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      owners
      training {
        id
        status
        trainer
        player
        owners
        winner
        hit
        createdAt
        updatedAt
        users {
          nextToken
        }
      }
    }
  }
`;
export const deletePlayerTraining = /* GraphQL */ `
  mutation DeletePlayerTraining(
    $input: DeletePlayerTrainingInput!
    $condition: ModelPlayerTrainingConditionInput
  ) {
    deletePlayerTraining(input: $input, condition: $condition) {
      id
      trainingID
      createdAt
      playerUsername
      userUsername
      players
      updatedAt
      user {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      player {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      owners
      training {
        id
        status
        trainer
        player
        owners
        winner
        hit
        createdAt
        updatedAt
        users {
          nextToken
        }
      }
    }
  }
`;
export const createTraining = /* GraphQL */ `
  mutation CreateTraining(
    $input: CreateTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    createTraining(input: $input, condition: $condition) {
      id
      status
      trainer
      player
      owners
      winner
      hit
      createdAt
      updatedAt
      users {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const updateTraining = /* GraphQL */ `
  mutation UpdateTraining(
    $input: UpdateTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    updateTraining(input: $input, condition: $condition) {
      id
      status
      trainer
      player
      owners
      winner
      hit
      createdAt
      updatedAt
      users {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const deleteTraining = /* GraphQL */ `
  mutation DeleteTraining(
    $input: DeleteTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    deleteTraining(input: $input, condition: $condition) {
      id
      status
      trainer
      player
      owners
      winner
      hit
      createdAt
      updatedAt
      users {
        items {
          id
          trainingID
          createdAt
          playerUsername
          userUsername
          players
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const createCourt = /* GraphQL */ `
  mutation CreateCourt(
    $input: CreateCourtInput!
    $condition: ModelCourtConditionInput
  ) {
    createCourt(input: $input, condition: $condition) {
      id
      courtNumber
      createdAt
      updatedAt
      owners
      days {
        items {
          id
          dateString
          courtNumber
          createdAt
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const updateCourt = /* GraphQL */ `
  mutation UpdateCourt(
    $input: UpdateCourtInput!
    $condition: ModelCourtConditionInput
  ) {
    updateCourt(input: $input, condition: $condition) {
      id
      courtNumber
      createdAt
      updatedAt
      owners
      days {
        items {
          id
          dateString
          courtNumber
          createdAt
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const deleteCourt = /* GraphQL */ `
  mutation DeleteCourt(
    $input: DeleteCourtInput!
    $condition: ModelCourtConditionInput
  ) {
    deleteCourt(input: $input, condition: $condition) {
      id
      courtNumber
      createdAt
      updatedAt
      owners
      days {
        items {
          id
          dateString
          courtNumber
          createdAt
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const createCourtDay = /* GraphQL */ `
  mutation CreateCourtDay(
    $input: CreateCourtDayInput!
    $condition: ModelCourtDayConditionInput
  ) {
    createCourtDay(input: $input, condition: $condition) {
      id
      dateString
      courtNumber
      createdAt
      updatedAt
      court {
        id
        courtNumber
        createdAt
        updatedAt
        owners
        days {
          nextToken
        }
      }
      owners
      day {
        id
        dateString
        createdAt
        updatedAt
        courts {
          nextToken
        }
        owners
        horas {
          nextToken
        }
      }
    }
  }
`;
export const updateCourtDay = /* GraphQL */ `
  mutation UpdateCourtDay(
    $input: UpdateCourtDayInput!
    $condition: ModelCourtDayConditionInput
  ) {
    updateCourtDay(input: $input, condition: $condition) {
      id
      dateString
      courtNumber
      createdAt
      updatedAt
      court {
        id
        courtNumber
        createdAt
        updatedAt
        owners
        days {
          nextToken
        }
      }
      owners
      day {
        id
        dateString
        createdAt
        updatedAt
        courts {
          nextToken
        }
        owners
        horas {
          nextToken
        }
      }
    }
  }
`;
export const deleteCourtDay = /* GraphQL */ `
  mutation DeleteCourtDay(
    $input: DeleteCourtDayInput!
    $condition: ModelCourtDayConditionInput
  ) {
    deleteCourtDay(input: $input, condition: $condition) {
      id
      dateString
      courtNumber
      createdAt
      updatedAt
      court {
        id
        courtNumber
        createdAt
        updatedAt
        owners
        days {
          nextToken
        }
      }
      owners
      day {
        id
        dateString
        createdAt
        updatedAt
        courts {
          nextToken
        }
        owners
        horas {
          nextToken
        }
      }
    }
  }
`;
export const createDay = /* GraphQL */ `
  mutation CreateDay(
    $input: CreateDayInput!
    $condition: ModelDayConditionInput
  ) {
    createDay(input: $input, condition: $condition) {
      id
      dateString
      createdAt
      updatedAt
      courts {
        items {
          id
          dateString
          courtNumber
          createdAt
          updatedAt
          owners
        }
        nextToken
      }
      owners
      horas {
        items {
          id
          hora
          dateString
          createdAt
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const updateDay = /* GraphQL */ `
  mutation UpdateDay(
    $input: UpdateDayInput!
    $condition: ModelDayConditionInput
  ) {
    updateDay(input: $input, condition: $condition) {
      id
      dateString
      createdAt
      updatedAt
      courts {
        items {
          id
          dateString
          courtNumber
          createdAt
          updatedAt
          owners
        }
        nextToken
      }
      owners
      horas {
        items {
          id
          hora
          dateString
          createdAt
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const deleteDay = /* GraphQL */ `
  mutation DeleteDay(
    $input: DeleteDayInput!
    $condition: ModelDayConditionInput
  ) {
    deleteDay(input: $input, condition: $condition) {
      id
      dateString
      createdAt
      updatedAt
      courts {
        items {
          id
          dateString
          courtNumber
          createdAt
          updatedAt
          owners
        }
        nextToken
      }
      owners
      horas {
        items {
          id
          hora
          dateString
          createdAt
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const createDayHour = /* GraphQL */ `
  mutation CreateDayHour(
    $input: CreateDayHourInput!
    $condition: ModelDayHourConditionInput
  ) {
    createDayHour(input: $input, condition: $condition) {
      id
      hora
      dateString
      createdAt
      updatedAt
      day {
        id
        dateString
        createdAt
        updatedAt
        courts {
          nextToken
        }
        owners
        horas {
          nextToken
        }
      }
      owners
      hour {
        id
        status
        hora
        playerUsername
        userUsername
        createdAt
        updatedAt
        trainer {
          id
          cognitoID
          username
          name
          email
          typeUser
          createdAt
          updatedAt
        }
        player {
          id
          cognitoID
          username
          name
          email
          typeUser
          createdAt
          updatedAt
        }
        days {
          nextToken
        }
        owners
      }
    }
  }
`;
export const updateDayHour = /* GraphQL */ `
  mutation UpdateDayHour(
    $input: UpdateDayHourInput!
    $condition: ModelDayHourConditionInput
  ) {
    updateDayHour(input: $input, condition: $condition) {
      id
      hora
      dateString
      createdAt
      updatedAt
      day {
        id
        dateString
        createdAt
        updatedAt
        courts {
          nextToken
        }
        owners
        horas {
          nextToken
        }
      }
      owners
      hour {
        id
        status
        hora
        playerUsername
        userUsername
        createdAt
        updatedAt
        trainer {
          id
          cognitoID
          username
          name
          email
          typeUser
          createdAt
          updatedAt
        }
        player {
          id
          cognitoID
          username
          name
          email
          typeUser
          createdAt
          updatedAt
        }
        days {
          nextToken
        }
        owners
      }
    }
  }
`;
export const deleteDayHour = /* GraphQL */ `
  mutation DeleteDayHour(
    $input: DeleteDayHourInput!
    $condition: ModelDayHourConditionInput
  ) {
    deleteDayHour(input: $input, condition: $condition) {
      id
      hora
      dateString
      createdAt
      updatedAt
      day {
        id
        dateString
        createdAt
        updatedAt
        courts {
          nextToken
        }
        owners
        horas {
          nextToken
        }
      }
      owners
      hour {
        id
        status
        hora
        playerUsername
        userUsername
        createdAt
        updatedAt
        trainer {
          id
          cognitoID
          username
          name
          email
          typeUser
          createdAt
          updatedAt
        }
        player {
          id
          cognitoID
          username
          name
          email
          typeUser
          createdAt
          updatedAt
        }
        days {
          nextToken
        }
        owners
      }
    }
  }
`;
export const createHour = /* GraphQL */ `
  mutation CreateHour(
    $input: CreateHourInput!
    $condition: ModelHourConditionInput
  ) {
    createHour(input: $input, condition: $condition) {
      id
      status
      hora
      playerUsername
      userUsername
      createdAt
      updatedAt
      trainer {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      player {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      days {
        items {
          id
          hora
          dateString
          createdAt
          updatedAt
          owners
        }
        nextToken
      }
      owners
    }
  }
`;
export const updateHour = /* GraphQL */ `
  mutation UpdateHour(
    $input: UpdateHourInput!
    $condition: ModelHourConditionInput
  ) {
    updateHour(input: $input, condition: $condition) {
      id
      status
      hora
      playerUsername
      userUsername
      createdAt
      updatedAt
      trainer {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      player {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      days {
        items {
          id
          hora
          dateString
          createdAt
          updatedAt
          owners
        }
        nextToken
      }
      owners
    }
  }
`;
export const deleteHour = /* GraphQL */ `
  mutation DeleteHour(
    $input: DeleteHourInput!
    $condition: ModelHourConditionInput
  ) {
    deleteHour(input: $input, condition: $condition) {
      id
      status
      hora
      playerUsername
      userUsername
      createdAt
      updatedAt
      trainer {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      player {
        id
        cognitoID
        username
        name
        email
        typeUser
        createdAt
        updatedAt
        trainings {
          nextToken
        }
      }
      days {
        items {
          id
          hora
          dateString
          createdAt
          updatedAt
          owners
        }
        nextToken
      }
      owners
    }
  }
`;
