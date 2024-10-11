import { Patient } from "../types"
import PatientDetailsItem from "./PatientDetailsItem"
import { usePatientStore } from "../store/store"
import { toast, Zoom } from 'react-toastify'

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {

    const deletePatient = usePatientStore((state) => state.deletePatient)
    const getPatientbyId = usePatientStore((state) => state.getPatientById)

    const handleClick = () => {
        deletePatient(patient.id)
        toast.error('Paciente Eliminado', {
            position: "top-left",
            transition: Zoom,
        })
    }
    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-lg">
            <PatientDetailsItem
                label='ID'
                data={patient.id}
            />
            <PatientDetailsItem
                label='Nombre'
                data={patient.name}
            />
            <PatientDetailsItem
                label='Propietario'
                data={patient.caretaker}
            />
            <PatientDetailsItem
                label='Email'
                data={patient.email}
            />
            <PatientDetailsItem
                label='Fecha alta'
                data={patient.date.toString()}
            />
            <PatientDetailsItem
                label='Síntomas'
                data={patient.symptoms}
            />
            <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-gray-600 hover:bg-gray-400 text-white font-bold rounded-lg uppercase"
                    onClick={() => getPatientbyId(patient.id)}
                >Editar</button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-800 hover:bg-red-600 text-white font-bold rounded-lg uppercase"
                    onClick={handleClick}
                >Eliminar</button>
            </div>
        </div>
    )
}
