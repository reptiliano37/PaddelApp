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
      numeroPista
      day {
        id
        dia
        mes
        hora {
          id
          status
          hora
          playerUsername
          userUsername
          createdAt
          updatedAt
          owners
        }
        createdAt
        updatedAt
        owners
      }
      createdAt
      updatedAt
      owners
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
      numeroPista
      day {
        id
        dia
        mes
        hora {
          id
          status
          hora
          playerUsername
          userUsername
          createdAt
          updatedAt
          owners
        }
        createdAt
        updatedAt
        owners
      }
      createdAt
      updatedAt
      owners
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
      numeroPista
      day {
        id
        dia
        mes
        hora {
          id
          status
          hora
          playerUsername
          userUsername
          createdAt
          updatedAt
          owners
        }
        createdAt
        updatedAt
        owners
      }
      createdAt
      updatedAt
      owners
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
      dia
      mes
      hora {
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
        owners
      }
      createdAt
      updatedAt
      owners
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
      dia
      mes
      hora {
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
        owners
      }
      createdAt
      updatedAt
      owners
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
      dia
      mes
      hora {
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
        owners
      }
      createdAt
      updatedAt
      owners
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
      owners
    }
  }
`;
