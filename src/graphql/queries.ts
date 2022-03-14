/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($username: String!) {
    getUser(username: $username) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $username: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      username: $username
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: SearchableUserSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($username: String!) {
    getPlayer(username: $username) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $username: String
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPlayers(
      username: $username
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const searchPlayers = /* GraphQL */ `
  query SearchPlayers(
    $filter: SearchablePlayerFilterInput
    $sort: SearchablePlayerSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchPlayers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const getTraining = /* GraphQL */ `
  query GetTraining($id: ID!) {
    getTraining(id: $id) {
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
export const listTrainings = /* GraphQL */ `
  query ListTrainings(
    $filter: ModelTrainingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPista = /* GraphQL */ `
  query GetPista($numeroPista: String!) {
    getPista(numeroPista: $numeroPista) {
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
export const listPistas = /* GraphQL */ `
  query ListPistas(
    $numeroPista: String
    $filter: ModelPistaFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPistas(
      numeroPista: $numeroPista
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        numeroPista
        createdAt
        updatedAt
        owners
        dias {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getReservaPista = /* GraphQL */ `
  query GetReservaPista($id: ID!) {
    getReservaPista(id: $id) {
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
export const listReservaPistas = /* GraphQL */ `
  query ListReservaPistas(
    $filter: ModelReservaPistaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReservaPistas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
        owners
        day {
          id
          dateString
          createdAt
          updatedAt
          owners
        }
      }
      nextToken
    }
  }
`;
export const getDia = /* GraphQL */ `
  query GetDia($dateString: String!) {
    getDia(dateString: $dateString) {
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
export const listDias = /* GraphQL */ `
  query ListDias(
    $dateString: String
    $filter: ModelDiaFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDias(
      dateString: $dateString
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        dateString
        createdAt
        updatedAt
        pistas {
          nextToken
        }
        owners
      }
      nextToken
    }
  }
`;
