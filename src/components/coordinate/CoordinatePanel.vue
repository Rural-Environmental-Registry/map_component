<template>
  <div>
    <div
      class="coordinate-panel"
      :class="{ 'panel-open': isOpen }"
    >
      <div class="panel-header">
        <h3>{{ texts.title }}</h3>
        <ElButton
          class="close-button"
          @click="togglePanel"
        >
          <FontAwesomeIcon iconName="xmark" />
        </ElButton>
      </div>
      <div class="panel-content">
        <div class="coordinate-section">
          <h4>{{ texts.referenceSystem }}</h4>
          <ElSelect
            v-model="selectedSystem"
            class="coordinate-select"
            :placeholder="texts.selectSystem"
            :disabled="true"
            @change="onSystemChange"
          >
            <ElOption
              :label="texts.sirgas2000"
              value="SIRGAS2000"
            />
          </ElSelect>
        </div>

        <div class="coordinate-section">
          <h4>{{ texts.coordinateFormat }}</h4>
          <ElSelect
            v-model="selectedFormat"
            class="coordinate-select"
            :placeholder="texts.selectFormat"
            @change="onFormatChange"
          >
            <ElOption
              :label="texts.decimalDegrees"
              value="DD"
            />
            <ElOption
              :label="texts.degreesMinutesSeconds"
              value="DMS"
            />
          </ElSelect>
        </div>

        <ElTabs v-model="activeTab">
          <ElTabPane
            :label="texts.manualInput"
            name="manual"
          >
            <div class="coordinate-section">
              <h4>{{ texts.insertCoordinates }}</h4>
              <div
                v-if="selectedFormat === 'DD'"
                class="coordinate-inputs-row"
              >
                <div class="input-group">
                  <label>{{ texts.xLongitude }}</label>
                  <ElInput
                    v-model="manualInput.x"
                    :placeholder="texts.placeholderLongitude"
                    type="number"
                    step="any"
                  />
                </div>
                <div class="input-group">
                  <label>{{ texts.yLatitude }}</label>
                  <ElInput
                    v-model="manualInput.y"
                    :placeholder="texts.placeholderLatitude"
                    type="number"
                    step="any"
                  />
                </div>
              </div>

              <div
                v-if="selectedFormat === 'DMS'"
                class="coordinate-inputs-column"
              >
                <div class="input-group">
                  <label>{{ texts.xLongitude }}</label>
                  <div class="dms-inputs">
                    <ElInput
                      v-model="manualInput.xDegrees"
                      :placeholder="texts.placeholderDegrees"
                      type="number"
                      step="1"
                    />
                    <ElInput
                      v-model="manualInput.xMinutes"
                      :placeholder="texts.placeholderMinutes"
                      type="number"
                      step="1"
                    />
                    <ElInput
                      v-model="manualInput.xSeconds"
                      :placeholder="texts.placeholderSeconds"
                      type="number"
                      step="any"
                    />
                  </div>
                </div>
                <div class="input-group">
                  <label>{{ texts.yLatitude }}</label>
                  <div class="dms-inputs">
                    <ElInput
                      v-model="manualInput.yDegrees"
                      :placeholder="texts.placeholderDegrees"
                      type="number"
                      step="1"
                    />
                    <ElInput
                      v-model="manualInput.yMinutes"
                      :placeholder="texts.placeholderMinutes"
                      type="number"
                      step="1"
                    />
                    <ElInput
                      v-model="manualInput.ySeconds"
                      :placeholder="texts.placeholderSeconds"
                      type="number"
                      step="any"
                    />
                  </div>
                </div>
              </div>
              <div class="coordinate-inputs-row">
                <div class="input-group">
                  <label>{{ texts.azimuth }}</label>
                  <ElInput
                    v-model="manualInput.azimuth"
                    :placeholder="texts.placeholderAzimuth"
                    type="number"
                    step="any"
                  />
                </div>
                <div class="input-group">
                  <label>{{ texts.distance }}</label>
                  <ElInput
                    v-model="manualInput.distance"
                    :placeholder="texts.placeholderDistance"
                    type="number"
                    step="any"
                  />
                </div>
              </div>
              <ElButton
                class="apply-button"
                type="primary"
                @click="addManualPoint"
              >
                {{ texts.addPoint }}
              </ElButton>
              <div
                v-if="manualPoints.length > 0"
                class="geometry-list"
              >
                <h4>{{ texts.addedPoints }}</h4>
                <div class="table-container">
                  <ElTable
                    :data="manualPoints"
                    style="width: 100%"
                  >
                    <ElTableColumn
                      :label="texts.index"
                      prop="index"
                      width="80"
                    />
                    <ElTableColumn
                      :label="texts.x"
                      prop="x"
                      width="120"
                    />
                    <ElTableColumn
                      :label="texts.y"
                      prop="y"
                      width="120"
                    />
                    <ElTableColumn
                      :label="texts.azimuth"
                      prop="azimuth"
                      width="120"
                    />
                    <ElTableColumn
                      :label="texts.distance"
                      prop="distance"
                      width="120"
                    />
                    <ElTableColumn
                      :label="texts.actions"
                      width="120"
                    >
                      <template #default="{ $index }">
                        <ElDropdown trigger="click">
                          <ElButton type="primary">
                            {{ texts.actions }}
                            <FontAwesomeIcon iconName="chevron-down" />
                          </ElButton>
                          <template #dropdown>
                            <ElDropdownMenu>
                              <ElDropdownItem
                                :title="texts.editPointTitle"
                                :aria-label="texts.editPointDescription"
                                @click="editPoint($index)"
                              >
                                <FontAwesomeIcon
                                  iconName="pencil"
                                  class="icon-black"
                                />
                                {{ texts.editPoint }}
                              </ElDropdownItem>
                              <ElDropdownItem
                                :title="texts.removePointTitle"
                                :aria-label="texts.removePointDescription"
                                @click="removePoint($index)"
                              >
                                <FontAwesomeIcon
                                  iconName="trash"
                                  class="icon-black"
                                />
                                {{ texts.removePoint }}
                              </ElDropdownItem>
                            </ElDropdownMenu>
                          </template>
                        </ElDropdown>
                      </template>
                    </ElTableColumn>
                  </ElTable>
                </div>
              </div>
              <ElButton
                v-if="manualPoints.length > 0"
                class="apply-button"
                type="success"
                @click="finalizeManualGeometry"
              >
                {{ texts.finalizeGeometry }}
              </ElButton>
              <div
                v-if="manualGeometries.length > 0"
                class="geometry-list"
              >
                <ElButton
                  type="danger"
                  class="clear-button"
                  :title="texts.clearGeometriesTitle"
                  :aria-label="texts.clearGeometriesDescription"
                  @click="clearGeometries"
                >
                  <FontAwesomeIcon iconName="trash" />
                  {{ texts.clearGeometries }}
                </ElButton>
              </div>
            </div>
          </ElTabPane>

          <ElTabPane
            label="Upload CSV"
            name="csv"
          >
            <div class="coordinate-section">
              <h4>{{ texts.csvFileUpload }}</h4>
              <div class="csv-upload">
                <ElUpload
                  ref="uploadRef"
                  class="upload-area"
                  drag
                  action="#"
                  :auto-upload="false"
                  :on-change="handleFileChange"
                  :on-remove="handleFileRemove"
                  :limit="1"
                  accept=".csv"
                >
                  <FontAwesomeIcon
                    iconName="upload"
                    class="upload-icon"
                  />
                  <div class="el-upload__text">
                    {{ texts.dragCsvFile }}
                  </div>
                  <template #tip>
                    <div class="el-upload__tip">
                      {{ texts.csvColumnsInfo }}
                    </div>
                  </template>
                </ElUpload>
                <ElButton
                  v-if="csvData.length > 0"
                  class="apply-button"
                  type="primary"
                  @click="applyCSVCoordinates"
                >
                  {{ texts.applyCsvCoordinates }}
                </ElButton>
                <ElButton
                  type="danger"
                  class="clear-button"
                  v-if="csvData.length > 0"
                  :title="texts.clearGeometriesTitle"
                  :aria-label="texts.clearGeometriesDescription"
                  @click="clearGeometries"
                >
                  <FontAwesomeIcon iconName="trash" />
                  {{ texts.clearGeometries }}
                </ElButton>
              </div>
            </div>
          </ElTabPane>

          <ElTabPane
            :label="texts.shapefileUpload"
            name="shapefile"
          >
            <div class="coordinate-section">
              <h4>{{ texts.shapefileFileUpload }}</h4>
              <div class="csv-upload">
                <ElUpload
                  ref="shapefileUploadRef"
                  class="upload-area"
                  drag
                  action="#"
                  :auto-upload="false"
                  :on-change="handleShapefileChange"
                  :on-remove="handleShapefileRemove"
                  :limit="1"
                  accept=".zip"
                >
                  <FontAwesomeIcon
                    iconName="upload"
                    class="upload-icon"
                  />
                  <div class="el-upload__text">
                    {{ texts.dragShapefileZip }}
                  </div>
                  <template #tip>
                    <div class="el-upload__tip">
                      {{ texts.shapefileZipInfo }}
                    </div>
                  </template>
                </ElUpload>
                <ElButton
                  type="danger"
                  class="clear-button"
                  v-if="shapefileLoaded"
                  :title="texts.clearGeometriesTitle"
                  :aria-label="texts.clearGeometriesDescription"
                  @click="clearGeometries"
                >
                  <FontAwesomeIcon iconName="trash" />
                  {{ texts.clearGeometries }}
                </ElButton>
              </div>
            </div>
          </ElTabPane>
        </ElTabs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue'
  import {
    ElButton,
    ElSelect,
    ElOption,
    ElInput,
    ElTabs,
    ElTabPane,
    ElUpload,
    ElMessage,
    ElTable,
    ElTableColumn,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    ElTooltip
  } from 'element-plus'
  import FontAwesomeIcon from '../fa-icon/FontAwesomeIcon.vue'
  import Papa from 'papaparse'
  import L from 'leaflet'
  import { COORDINATE_PANEL_TEXTS } from '../../constants/coordinatePanel'
  import { CoordinateConverter } from '../../utils/CoordinateConverter'
  import DrawingControlHandler from '../../handlers/drawingControl'
  import type { DescriptiveMemorial } from '../../types'
  import { parseShapefileZip } from '../../utils/parseShapefileZip'
  import { validateShapefileGeometry } from '../../utils/validateShapefileGeometry'
  import type { Feature, MultiPolygon, Polygon } from 'geojson'

  interface CSVRow {
    X?: string
    Y?: string
    AZIMUTH?: string
    DISTANCIA?: string
    DISTANCE?: string
  }

  const rowDistance = (row: CSVRow): string | undefined => row.DISTANCIA ?? row.DISTANCE

  interface ParsedData {
    data: CSVRow[]
    meta: {
      fields: string[] | undefined
    }
  }

  interface Point {
    x: number
    y: number
  }

  interface ManualPoint {
    index: number
    x: string
    y: string
    azimuth: string
    distance: string
  }

  const props = defineProps<{
    map?: L.Map
    descriptiveMemorial?: DescriptiveMemorial
  }>()

  const emit = defineEmits<{
    (e: 'systemChange', system: string): void
    (e: 'coordinatesChange', coordinates: { lat: number; lng: number }): void
    (e: 'geometryChange', geometry: string): void
    (e: 'geometryGeoJsonChange', feature: Feature<Polygon | MultiPolygon>): void
    (e: 'geometryRemoved'): void
  }>()

  const isOpen = ref<boolean>(false)
  const activeTab = ref<string>('manual')
  const selectedSystem = ref<string>('SIRGAS2000')
  const selectedFormat = ref<string>('DD')
  const latitude = ref<string>('')
  const longitude = ref<string>('')
  const csvData = ref<Array<{ x: number; y: number; azimuth: number; distance: number }>>([])
  const shapefileLoaded = ref<boolean>(false)
  const uploadRef = ref()
  const shapefileUploadRef = ref()
  const manualInput = ref({
    x: '',
    y: '',
    xDegrees: '',
    xMinutes: '',
    xSeconds: '',
    yDegrees: '',
    yMinutes: '',
    ySeconds: '',
    azimuth: '',
    distance: ''
  })
  const manualPoints = ref<any[]>([])
  const manualGeometries = ref<string[]>([])
  const editingIndex = ref<number | null>(null)
  let drawingControlInstance: DrawingControlHandler | null = null

  const texts = computed(() => {
    return { ...COORDINATE_PANEL_TEXTS, ...props.descriptiveMemorial?.customTexts }
  })

  const togglePanel = () => {
    isOpen.value = !isOpen.value
  }

  const getDrawingControlInstance = (): DrawingControlHandler | null => {
    if (!drawingControlInstance && props.map) {
      drawingControlInstance = new DrawingControlHandler(props.map, new L.FeatureGroup())
    }

    return drawingControlInstance
  }

  onMounted(() => {
    if (props.descriptiveMemorial?.show) {
      const controller = getDrawingControlInstance()
      if (controller) {
        const buttonTitle = texts.value.memorialDescriptive || ''
        controller.addMemorialDescriptiveButton(togglePanel, buttonTitle)
      }
    }
  })

  onBeforeUnmount(() => {
    const controller = getDrawingControlInstance()
    if (controller) {
      controller.removeMemorialDescriptiveButton()
    }
  })

  watch(
    () => props.descriptiveMemorial?.show,
    newValue => {
      const controller = getDrawingControlInstance()
      if (!controller) return

      if (newValue) {
        const buttonTitle = texts.value.memorialDescriptive || ''
        controller.addMemorialDescriptiveButton(togglePanel, buttonTitle)
      } else {
        controller.removeMemorialDescriptiveButton()
      }
    }
  )

  watch(
    () => props.descriptiveMemorial?.customTexts?.memorialDescriptive,
    newTitle => {
      const controller = getDrawingControlInstance()
      if (newTitle && controller) {
        controller.updateMemorialDescriptiveButtonTitle(newTitle)
      }
    }
  )

  const closePanel = () => {
    isOpen.value = false
  }

  const onSystemChange = (value: string) => {
    emit('systemChange', value)
  }

  const onFormatChange = (value: string) => {
    manualInput.value = {
      x: '',
      y: '',
      xDegrees: '',
      xMinutes: '',
      xSeconds: '',
      yDegrees: '',
      yMinutes: '',
      ySeconds: '',
      azimuth: '',
      distance: ''
    }
  }

  const calculateNewPoint = (startPoint: Point, azimuth: number, distance: number): Point => {
    const azimuthRad = (azimuth * Math.PI) / 180

    distance = distance / 111111.111111111

    const x = startPoint.x + distance * Math.sin(azimuthRad)
    const y = startPoint.y + distance * Math.cos(azimuthRad)

    return { x, y }
  }

  const generateWKT = (points: Point[]): string => {
    if (points.length === 1) {
      return `POINT(${points[0].x} ${points[0].y})`
    }

    if (points.length < 3) {
      const coordinates = points.map(p => `${p.x} ${p.y}`).join(', ')
      return `LINESTRING(${coordinates})`
    }

    const firstPoint = points[0]
    const lastPoint = points[points.length - 1]
    const isClosedPolygon = firstPoint.x === lastPoint.x && firstPoint.y === lastPoint.y

    let coordinates: string
    if (isClosedPolygon) {
      coordinates = points.map(p => `${p.x} ${p.y}`).join(', ')
    } else {
      const closedPoints = [...points, firstPoint]
      coordinates = closedPoints.map(p => `${p.x} ${p.y}`).join(', ')
    }
    return `POLYGON((${coordinates}))`
  }

  const convertDMSToDDFromString = (dmsString: string): number => {
    const cleanString = dmsString.trim().toUpperCase()

    if (!cleanString) return NaN

    // Graus decimais com sufixo ° (ex.: -44.990400°) — sem minutos/segundos
    if (cleanString.includes('°') && !cleanString.includes('′') && !cleanString.includes('″')) {
      const decimalPart = cleanString.split('°')[0].replace(',', '.')
      const value = parseFloat(decimalPart)
      const isNegative = cleanString.includes('S') || cleanString.includes('W')

      if (Number.isNaN(value)) return NaN
      return isNegative ? -Math.abs(value) : value
    }

    if (cleanString.includes('°') || cleanString.includes('′') || cleanString.includes('″')) {
      const degreesPart = cleanString.split('°')[0] || '0'
      const afterDegrees = cleanString.split('°')[1] || ''
      const minutesPart = afterDegrees.split('′')[0] || '0'
      const afterMinutes = afterDegrees.split('′')[1] || ''
      const secondsPart = afterMinutes.split('″')[0] || afterMinutes.split('"')[0] || '0'

      const degrees = parseInt(degreesPart, 10) || 0
      const minutes = parseInt(minutesPart, 10) || 0
      const seconds = parseFloat(secondsPart.replace(',', '.')) || 0

      const isNegative = cleanString.includes('S') || cleanString.includes('W')
      const dd = Math.abs(degrees) + minutes / 60 + seconds / 3600

      return isNegative ? -dd : dd
    }

    return parseFloat(cleanString.replace(',', '.'))
  }

  const processCSVData = (data: CSVRow[]): Point[] => {
    const points: Point[] = []
    let lastPoint: Point | null = null

    for (const row of data) {
      const distanceValue = rowDistance(row)
      const hasXY = Boolean(row.X?.trim() && row.Y?.trim())
      const hasAzimuthDistance = Boolean(row.AZIMUTH?.trim() && distanceValue?.trim())

      if (!hasXY && !hasAzimuthDistance) continue

      let currentPoint: Point | null = null

      if (hasXY) {
        currentPoint = {
          x: convertDMSToDDFromString(row.X!),
          y: convertDMSToDDFromString(row.Y!)
        }
      } else if (hasAzimuthDistance && lastPoint) {
        const azimuth = parseFloat(row.AZIMUTH!)
        const distance = parseFloat(distanceValue!)
        currentPoint = calculateNewPoint(lastPoint, azimuth, distance)
      }

      if (currentPoint && !Number.isNaN(currentPoint.x) && !Number.isNaN(currentPoint.y)) {
        points.push(currentPoint)
        lastPoint = currentPoint
      }
    }

    return points
  }

  const handleFileChange = (file: any) => {
    if (file.raw) {
      csvData.value = []
      shapefileLoaded.value = false
      emit('geometryRemoved')

      Papa.parse(file.raw, {
        header: true,
        skipEmptyLines: true,
        complete: (results: Papa.ParseResult<CSVRow>) => {
          const rows = results.data.filter(
            (row) =>
              (row.X?.trim() && row.Y?.trim()) ||
              (row.AZIMUTH?.trim() && rowDistance(row)?.trim())
          )

          const firstRow = rows[0]
          if (!firstRow?.X?.trim() || !firstRow?.Y?.trim()) {
            ElMessage.error(texts.value.errorFirstRowXY)
            return
          }

          const points = processCSVData(rows)
          if (points.length > 0) {
            csvData.value = points.map(p => ({
              x: p.x,
              y: p.y,
              azimuth: 0,
              distance: 0
            }))
            const wkt = generateWKT(points)
            emit('geometryChange', wkt)
          }
        }
      })
    }
  }

  const handleFileRemove = () => {
    csvData.value = []
    manualGeometries.value = []
    if (uploadRef.value) {
      uploadRef.value.clearFiles()
    }
    emit('geometryRemoved')
  }

  const handleShapefileChange = async (file: any) => {
    if (!file.raw) return

    emit('geometryRemoved')
    csvData.value = []
    shapefileLoaded.value = false

    const parseResult = await parseShapefileZip(file.raw)
    if (!parseResult.ok) {
      ElMessage.error(parseResult.error)
      shapefileUploadRef.value?.clearFiles()
      return
    }

    const validationResult = validateShapefileGeometry(parseResult.features)
    if (!validationResult.ok) {
      ElMessage.error(validationResult.error)
      shapefileUploadRef.value?.clearFiles()
      return
    }

    shapefileLoaded.value = true
    emit('geometryGeoJsonChange', validationResult.feature)
    ElMessage.success(texts.value.shapefileAppliedSuccess)
  }

  const handleShapefileRemove = () => {
    shapefileLoaded.value = false
    if (shapefileUploadRef.value) {
      shapefileUploadRef.value.clearFiles()
    }
    emit('geometryRemoved')
  }

  const editPoint = (index: number) => {
    const point = manualPoints.value[index]
    const dms = CoordinateConverter.ddToDMS(parseFloat(point.x))
    const dmsY = CoordinateConverter.ddToDMS(parseFloat(point.y))

    manualInput.value = {
      x: point.x.toString(),
      y: point.y.toString(),
      xDegrees: dms.degrees.toString(),
      xMinutes: dms.minutes.toString(),
      xSeconds: dms.seconds.toString(),
      yDegrees: dmsY.degrees.toString(),
      yMinutes: dmsY.minutes.toString(),
      ySeconds: dmsY.seconds.toString(),
      azimuth: point.azimuth,
      distance: point.distance
    }
    editingIndex.value = index
  }

  const removePoint = (index: number) => {
    manualPoints.value.splice(index, 1)
    if (editingIndex.value === index) {
      editingIndex.value = null
      manualInput.value = {
        x: '',
        y: '',
        xDegrees: '',
        xMinutes: '',
        xSeconds: '',
        yDegrees: '',
        yMinutes: '',
        ySeconds: '',
        azimuth: '',
        distance: ''
      }
    }
  }

  const convertDMSToDD = (degrees: string, minutes: string, seconds: string): number => {
    const deg = parseFloat(degrees) || 0
    const min = parseFloat(minutes) || 0
    const sec = parseFloat(seconds) || 0
    return CoordinateConverter.dmsToDD(deg, min, sec)
  }

  const addManualPoint = () => {
    if (editingIndex.value !== null) {
      let x: number, y: number

      if (selectedFormat.value === 'DD') {
        if (editingIndex.value === 0 && (!manualInput.value.x || !manualInput.value.y)) {
          ElMessage.error(texts.value.errorXYRequired)
          return
        }
        x = manualInput.value.x !== '' ? parseFloat(manualInput.value.x) : parseFloat(manualPoints.value[editingIndex.value].x)
        y = manualInput.value.y !== '' ? parseFloat(manualInput.value.y) : parseFloat(manualPoints.value[editingIndex.value].y)
      } else {
        if (editingIndex.value === 0 && (!manualInput.value.xDegrees || !manualInput.value.yDegrees)) {
          ElMessage.error(texts.value.errorDegreesRequired)
          return
        }
        x = manualInput.value.xDegrees
          ? convertDMSToDD(manualInput.value.xDegrees, manualInput.value.xMinutes, manualInput.value.xSeconds)
          : parseFloat(manualPoints.value[editingIndex.value].x)
        y = manualInput.value.yDegrees
          ? convertDMSToDD(manualInput.value.yDegrees, manualInput.value.yMinutes, manualInput.value.ySeconds)
          : parseFloat(manualPoints.value[editingIndex.value].y)
      }

      manualPoints.value[editingIndex.value] = {
        index: editingIndex.value + 1,
        x: x.toString(),
        y: y.toString(),
        azimuth: manualInput.value.azimuth || manualPoints.value[editingIndex.value].azimuth,
        distance: manualInput.value.distance || manualPoints.value[editingIndex.value].distance
      }

      editingIndex.value = null
      manualInput.value = {
        x: '',
        y: '',
        xDegrees: '',
        xMinutes: '',
        xSeconds: '',
        yDegrees: '',
        yMinutes: '',
        ySeconds: '',
        azimuth: '',
        distance: ''
      }
      return
    }

    if (manualPoints.value.length === 0) {
      let x: number, y: number

      if (selectedFormat.value === 'DD') {
        if (!manualInput.value.x || !manualInput.value.y) {
          ElMessage.error(texts.value.errorXYRequired)
          return
        }
        x = parseFloat(manualInput.value.x)
        y = parseFloat(manualInput.value.y)
      } else {
        if (!manualInput.value.xDegrees || !manualInput.value.yDegrees) {
          ElMessage.error(texts.value.errorDegreesRequired)
          return
        }
        x = convertDMSToDD(manualInput.value.xDegrees, manualInput.value.xMinutes, manualInput.value.xSeconds)
        y = convertDMSToDD(manualInput.value.yDegrees, manualInput.value.yMinutes, manualInput.value.ySeconds)
      }

      manualPoints.value.push({
        index: 1,
        x: x.toString(),
        y: y.toString(),
        azimuth: manualInput.value.azimuth,
        distance: manualInput.value.distance
      })
    } else {
      const last = manualPoints.value[manualPoints.value.length - 1]
      let newPoint: Point

      if (selectedFormat.value === 'DD' && manualInput.value.x && manualInput.value.y) {
        newPoint = {
          x: parseFloat(manualInput.value.x),
          y: parseFloat(manualInput.value.y)
        }
      } else if (selectedFormat.value === 'DMS' && manualInput.value.xDegrees && manualInput.value.yDegrees) {
        newPoint = {
          x: convertDMSToDD(manualInput.value.xDegrees, manualInput.value.xMinutes, manualInput.value.xSeconds),
          y: convertDMSToDD(manualInput.value.yDegrees, manualInput.value.yMinutes, manualInput.value.ySeconds)
        }
      } else if (manualInput.value.azimuth && manualInput.value.distance) {
        newPoint = calculateNewPoint(
          { x: parseFloat(last.x), y: parseFloat(last.y) },
          parseFloat(manualInput.value.azimuth),
          parseFloat(manualInput.value.distance)
        )
      } else {
        ElMessage.error(texts.value.errorProvideCoordinatesOrAzimuthDistance)
        return
      }

      manualPoints.value.push({
        index: manualPoints.value.length + 1,
        x: newPoint.x.toString(),
        y: newPoint.y.toString(),
        azimuth: manualInput.value.azimuth,
        distance: manualInput.value.distance
      })
    }

    manualInput.value = {
      x: '',
      y: '',
      xDegrees: '',
      xMinutes: '',
      xSeconds: '',
      yDegrees: '',
      yMinutes: '',
      ySeconds: '',
      azimuth: '',
      distance: ''
    }
  }

  const finalizeManualGeometry = () => {
    if (manualPoints.value.length > 0) {
      const points = manualPoints.value.map(p => ({ x: parseFloat(p.x), y: parseFloat(p.y) }))
      const wkt = generateWKT(points)
      manualGeometries.value.push(wkt)
      emit('geometryChange', wkt)
      manualPoints.value = []
      manualInput.value = {
        x: '',
        y: '',
        xDegrees: '',
        xMinutes: '',
        xSeconds: '',
        yDegrees: '',
        yMinutes: '',
        ySeconds: '',
        azimuth: '',
        distance: ''
      }
    }
  }

  const applyCSVCoordinates = () => {
    if (csvData.value.length > 0) {
      const points = csvData.value.map(row => ({ x: row.x, y: row.y }))
      const wkt = generateWKT(points)
      emit('geometryChange', wkt)
    }
  }

  const clearGeometries = () => {
    manualGeometries.value = []
    csvData.value = []
    manualPoints.value = []
    shapefileLoaded.value = false
    if (uploadRef.value) {
      uploadRef.value.clearFiles()
    }
    if (shapefileUploadRef.value) {
      shapefileUploadRef.value.clearFiles()
    }
    manualInput.value = {
      x: '',
      y: '',
      xDegrees: '',
      xMinutes: '',
      xSeconds: '',
      yDegrees: '',
      yMinutes: '',
      ySeconds: '',
      azimuth: '',
      distance: ''
    }
    emit('geometryRemoved')
  }

  defineExpose({
    togglePanel,
    closePanel
  })
</script>

<style scoped>
  .coordinate-panel {
    position: absolute;
    bottom: 50px;
    right: 10px;
    z-index: 1000;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    max-height: 445px;
    max-width: 480px;
    min-width: 480px !important;
    overflow-y: auto;
    overflow-x: auto;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    opacity: 0;
    pointer-events: none;

    &.panel-open {
      transform: translateX(0);
      opacity: 1;
      pointer-events: all;
    }
  }

  .coordinate-inputs-column {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #eee;

    h3 {
      margin: 0;
      color: var(--mapa-base-green);
      font-size: 16px;
    }

    .close-button {
      padding: 4px;
      color: #666;

      &:hover {
        color: var(--mapa-base-green);
      }
    }
  }

  .panel-content {
    padding: 15px;
  }

  .coordinate-section {
    margin-bottom: 20px;
    padding: 0.2px;

    h4 {
      margin: 0 0 10px 0;
      color: #666;
      font-size: 14px;
    }
  }

  .coordinate-select {
    width: 100%;
  }

  .coordinate-inputs-row {
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: space-between;
    margin-bottom: 10px;

    .el-input {
      width: 100%;
    }
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
      font-size: 12px;
      color: #666;
    }
  }

  .apply-button {
    width: 100%;
    background-color: var(--mapa-base-green);
    border-color: var(--mapa-base-green);
    margin-top: 30px;

    &:hover {
      background-color: var(--mapa-base-green);
      opacity: 0.9;
    }
  }

  .csv-upload {
    .upload-area {
      width: 100%;
      margin-bottom: 15px;
    }

    .upload-icon {
      font-size: 24px;
      color: var(--mapa-base-green);
      margin-bottom: 10px;
    }

    .el-upload__tip {
      color: #666;
      font-size: 12px;
      margin-top: 5px;
    }
  }

  .geometry-list {
    margin-top: 15px;

    h4 {
      margin: 0 0 10px 0;
      color: #666;
      font-size: 14px;
    }

    ul {
      list-style-type: none;
      padding: 0;

      li {
        margin-bottom: 5px;
        color: #666;
        font-size: 12px;
      }
    }
  }

  .table-container {
    width: 100%;
    overflow-x: auto;
  }

  .el-dropdown-menu__item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  :deep(.el-dropdown-menu__item) {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  :deep(.el-button--primary) {
    background-color: var(--mapa-base-green);
    border-color: var(--mapa-base-green);
  }

  :deep(.el-button--primary:hover) {
    background-color: var(--mapa-base-green);
    opacity: 0.9;
  }

  .clear-button {
    margin-top: 15px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  :deep(.clear-button .el-icon) {
    margin-right: 4px;
  }

  .geometry-items {
    margin: 10px 0;
  }

  .geometry-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    background-color: #f5f7fa;
    border-radius: 4px;
    margin-bottom: 8px;
  }

  .geometry-text {
    font-family: monospace;
    font-size: 12px;
    color: #666;
    word-break: break-all;
  }

  .dms-inputs {
    display: flex;
    gap: 16px;
    justify-content: space-between;

    .el-input {
      width: 100%;
    }
  }
</style>
