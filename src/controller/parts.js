import { v4 as uuidv4 } from 'uuid'

let partsDetails = [
  {
    id: 'asdkljdjskldj-klsd',
    partName: 'R002PH1073',
    partType: 'Port_Hole',
    cycleTimeInSec: 12,
  },
  {
    id: 'asdkljdjdj-klsd',
    partName: 'R002PH1074',
    partType: 'Scooping',
    cycleTimeInSec: 17,
  },
]

export const createPart = (req, res) => {
  const reqBody = req.body

  console.log('reqBody', { body: reqBody, path: req.path, method: req.method })

  partsDetails.push({ ...reqBody, id: uuidv4() })

  res.status(201).json({
    success: true,
    data: partsDetails,
  })
}

export const getParts = (req, res) => {
  console.log('req', { path: req.path })
  //console.log(partsDetails);
  res.json({
    success: true,
    data: partsDetails,
  })
}

export const getPartById = (req, res) => {
  const { id } = req.params
  const foundParts = partsDetails.find((part) => part.id === id)

  console.log(`The found part is ${JSON.stringify(foundParts.partName)}`)

  res.json({
    success: true,
    data: foundParts,
  })
}

export const deletePart = (req, res) => {
  const { id } = req.params

  partsDetails = partsDetails.filter((tempData) => tempData.id !== id)

  console.log(`Part with the ID ${id} is deleted from the DB`)

  res.json({
    success: true,
    message: `The part with id ${id} deleted successfully`,
  })
}

export const updatePart = (req, res) => {
  const { id } = req.params
  const { partName, partType, cycleTimeInSec } = req.body

  //const partToUpdate = partsDetails.find((tempData) => tempData.id === id)

  partsDetails = partsDetails.map((part) => {
    if (part.id === id) {
      return {
        ...part,
        ...(partName && { partName }),
        ...(partType && { partName }),
        ...(cycleTimeInSec && { cycleTimeInSec }),
      }
    } else {
      return part
    }
  })

  console.log(`User id with the id as ${id} has been updated`)

  res.json({
    success: true,
    data: partsDetails,
    message: `The part with id ${id} updated successfully`,
  })
}
