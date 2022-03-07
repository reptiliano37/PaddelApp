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
export const createPista = /* GraphQL */ `
  mutation CreatePista(
    $input: CreatePistaInput!
    $condition: ModelPistaConditionInput
  ) {
    createPista(input: $input, condition: $condition) {
      id
      numeroPista
      createdAt
      updatedAt
      owners
      dias {
        items {
          id
          courtNumber
          dateString
          createdAt
          hora
          playerUsername
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const updatePista = /* GraphQL */ `
  mutation UpdatePista(
    $input: UpdatePistaInput!
    $condition: ModelPistaConditionInput
  ) {
    updatePista(input: $input, condition: $condition) {
      id
      numeroPista
      createdAt
      updatedAt
      owners
      dias {
        items {
          id
          courtNumber
          dateString
          createdAt
          hora
          playerUsername
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const deletePista = /* GraphQL */ `
  mutation DeletePista(
    $input: DeletePistaInput!
    $condition: ModelPistaConditionInput
  ) {
    deletePista(input: $input, condition: $condition) {
      id
      numeroPista
      createdAt
      updatedAt
      owners
      dias {
        items {
          id
          courtNumber
          dateString
          createdAt
          hora
          playerUsername
          updatedAt
          owners
        }
        nextToken
      }
    }
  }
`;
export const createReservaPista = /* GraphQL */ `
  mutation CreateReservaPista(
    $input: CreateReservaPistaInput!
    $condition: ModelReservaPistaConditionInput
  ) {
    createReservaPista(input: $input, condition: $condition) {
      id
      courtNumber
      dateString
      createdAt
      hora
      playerUsername
      updatedAt
      court {
        id
        numeroPista
        createdAt
        updatedAt
        owners
        dias {
          nextToken
        }
      }
      owners
      day {
        id
        dateString
        createdAt
        updatedAt
        pistas {
          nextToken
        }
        owners
      }
    }
  }
`;
export const updateReservaPista = /* GraphQL */ `
  mutation UpdateReservaPista(
    $input: UpdateReservaPistaInput!
    $condition: ModelReservaPistaConditionInput
  ) {
    updateReservaPista(input: $input, condition: $condition) {
      id
      courtNumber
      dateString
      createdAt
      hora
      playerUsername
      updatedAt
      court {
        id
        numeroPista
        createdAt
        updatedAt
        owners
        dias {
          nextToken
        }
      }
      owners
      day {
        id
        dateString
        createdAt
        updatedAt
        pistas {
          nextToken
        }
        owners
      }
    }
  }
`;
export const deleteReservaPista = /* GraphQL */ `
  mutation DeleteReservaPista(
    $input: DeleteReservaPistaInput!
    $condition: ModelReservaPistaConditionInput
  ) {
    deleteReservaPista(input: $input, condition: $condition) {
      id
      courtNumber
      dateString
      createdAt
      hora
      playerUsername
      updatedAt
      court {
        id
        numeroPista
        createdAt
        updatedAt
        owners
        dias {
          nextToken
        }
      }
      owners
      day {
        id
        dateString
        createdAt
        updatedAt
        pistas {
          nextToken
        }
        owners
      }
    }
  }
`;
export const createDia = /* GraphQL */ `
  mutation CreateDia(
    $input: CreateDiaInput!
    $condition: ModelDiaConditionInput
  ) {
    createDia(input: $input, condition: $condition) {
      id
      dateString
      createdAt
      updatedAt
      pistas {
        items {
          id
          courtNumber
          dateString
          createdAt
          hora
          playerUsername
          updatedAt
          owners
        }
        nextToken
      }
      owners
    }
  }
`;
export const updateDia = /* GraphQL */ `
  mutation UpdateDia(
    $input: UpdateDiaInput!
    $condition: ModelDiaConditionInput
  ) {
    updateDia(input: $input, condition: $condition) {
      id
      dateString
      createdAt
      updatedAt
      pistas {
        items {
          id
          courtNumber
          dateString
          createdAt
          hora
          playerUsername
          updatedAt
          owners
        }
        nextToken
      }
      owners
    }
  }
`;
export const deleteDia = /* GraphQL */ `
  mutation DeleteDia(
    $input: DeleteDiaInput!
    $condition: ModelDiaConditionInput
  ) {
    deleteDia(input: $input, condition: $condition) {
      id
      dateString
      createdAt
      updatedAt
      pistas {
        items {
          id
          courtNumber
          dateString
          createdAt
          hora
          playerUsername
          updatedAt
          owners
        }
        nextToken
      }
      owners
    }
  }
`;
