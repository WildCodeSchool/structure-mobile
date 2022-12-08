import { gql } from "@apollo/client";


//----------------------AUTH--------------------------------

export const LOGIN_QUERY = gql`
query Login($data: LoginInput!) {
	login(data: $data)
}
`

//----------------------USER--------------------------------

export const REGISTER_USER = gql`
	mutation Register($data: UserCreateInput!) {
		register(data: $data)
	}
`

export const IS_EXIST_USER = gql`
query IsExistUser($data: isExistUserInput!) {
  isExistUser(data: $data)
}
`
export const GET_ME = gql`
	query Me {
		me {
			id
			firstname
			lastname
			email
			roles
		}
	}
`

//----------------------PROJECT--------------------------------

export const GET_PROJECTS = gql`
	query Projects {
		projects {
			createdAt
			id
			subject
			title
		}
	}
`

export const GET_PROJECT = gql`
	query GetProject($where: ProjectWhereUniqueInput!) {
		project(where: $where) {
			id
			code
			title
			subject
			tickets {
				id
				title
				updatedAt
				priority
				status
				labels {
					name
				}
				user_author {
					firstname
					lastname
				}
			}
		}
}
`

export const CREATE_PROJECT = gql`
mutation CreateProject($data: ProjectCreateInput!) {
  createProject(data: $data) {
    id
    title
		subject
		code
  }
}
`